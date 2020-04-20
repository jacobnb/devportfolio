// Get the modal
var startModal = document.getElementById("play-modal");

$("#get-id").click(()=>{
    initNetwork(setID);
});

function displayStartModal(){
    startModal.style.display="block";
}
function hideStartModal(){
    console.log("Hiding start modal");
    startModal.style.display="none";
}

function setID(ID){
    $("#connection-id").text(ID);
}