// Get the modal
var startModal = document.getElementById("play-modal");
function displayStartModal(){
    startModal.style.display="block";
    initNetwork(setID);
    //setID("100");
}
function hideStartModal(){
    console.log("Hiding start modal");
    startModal.style.display="none";
}

function setID(ID){
    $("#connection-id").text("Connection Code: " + ID);
    //makeRequest(makeData('initFile'));
    makeRequest(makeData('writeConnectionID', ID));
    function parseIDs(connectionIDs){
        let validIDs = [];
        connectionIDs.result.forEach(element => {
            element = element.slice(0, -2);
            if(element != ID){
                console.log(ID + " != " + element);
                validIDs.push(element);
            }
        });
        console.log(validIDs);
        if(validIDs.length > 0){
            destID = validIDs[0];
            join();
        }
    }
    makeRequest(makeData('readConnectionIDS'), parseIDs);
    
    
}


$('#connect').click(()=>{
    let id = $('#ID').val();
    if(id.length > 10){ // very minimal check. not sure exact code characteristics
        destID = id;
        join();
        snake1.position.x = 0;
        snake1.position.y = 0;
        snake2.position.x = 60;
        snake2.position.y = 0;
    }
})

$('#start-game').click(()=>{
    hideStartModal();
    start_multi();
})