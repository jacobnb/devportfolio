// Get the modal
var startModal = document.getElementById("play-modal");
function displayStartModal(){
    startModal.style.display="block";
    initNetwork(setID);
}
function hideStartModal(){
    console.log("Hiding start modal");
    startModal.style.display="none";
}

function setID(ID){
    $("#connection-id").text("Connection Code: " + ID);
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