var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var conn = null;
var destID = null;

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
        console.log("Data recieved");
        var cueString = "<span class=\"cueMsg\">Cue: </span>";
        switch (data) {
            default:
                console.log(data);
                break;
        };
    });
    conn.on('close', function () {
        conn = null;
        start(true);
    });
};

function sendMessage(msg) {
    if (conn && conn.open) {
        conn.send(msg);
        console.log("Sent: " + msg)
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

    conn.on('open', function () {
        console.log("Connected to: " + conn.peer);

        // // Check URL params for comamnds that should be sent immediately
        // var command = getUrlParam("command");
        // if (command)
        //     conn.send(command);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        console.log(data);
    });
    conn.on('close', function () {
        console.log("close connection");
    });
};

