var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var conn = null;
var destID = null;
var inputqueue = [];
function initNetwork(setID){
    console.log('init');
    peer = new Peer(null, { debug: 2 });
    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }
        console.log('ID: ' + peer.id);
        setID(peer.id);
    });
    peer.on('connection', function (c) {
        // Allow only a single connection
        if (conn) {
            c.on('open', function() { 
                c.send("Already connected to another client");
                setTimeout(function() { c.close(); }, 500);
            });
            return;
        }

        conn = c;
        console.log("Connected to: " + conn.peer);
        snake2.position.x = 0;
        snake2.position.y = 0;
        snake1.position.x = 60;
        snake1.position.y = 0;
        ready();
    });
    peer.on('disconnected', function () {
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function () {
        conn = null;
        console.log('Connection destroyed');
    });
    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
};

/**
 * Triggered once a connection has been achieved.
 * Defines callbacks to handle incoming data and connection events.
 */
function ready() {
    conn.on('data', function (data) {
        if(data.type){
            switch (data.type) {
                case "input":
                    inputqueue.unshift(data);
                    break;
                case "init":
                    console.log("receiving init");
                    break;
                case "repText":
                    replaceTextPredifined(data.arr, data.selector);
                    isConnected = true;
                    break;
                default:
                    console.log(data);
                    break;
            };
        }
        
    });
    conn.on('close', function () {
        conn = null;
        start(true);
    });
};

function sendGameMessage(type, mes, pos){
    let message = {};
    message.type = type;
    message.mes = mes;
    message.pos = pos;
    message.time = Date.now();
    sendMessage(message);
}
function sendMessage(msg) {
    if (conn && conn.open) {
        conn.send(msg);
    } else {
        console.log('Connection is closed');
    }
};


function join() {
    console.log("Connecting to " + destID);
    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    conn = peer.connect(destID, {
        reliable: true
    });
    ready();
    conn.on('open', function () {
        console.log("Connected to: " + conn.peer);
        let mes = {};
        mes.type = "repText";
        mes.arr = makeArr(origNumLetters);
        mes.selector = "div#lead-content h1";
        replaceTextPredifined(mes.arr, mes.selector);
        sendMessage(mes);
        mes.selector = "div#lead-content h2";
        replaceTextPredifined(mes.arr, mes.selector);
        sendMessage(mes);
        isConnected = true;
    });
    // // Handle incoming data (messages only since this is the signal sender)
    // conn.on('data', function (data) {
    //     console.log(data);
    // });
    // conn.on('close', function () {
    //     console.log("close connection");
    // });
};

