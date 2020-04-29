// Get the modal
var startModal = document.getElementById("play-modal");
function displayStartModal(){
    startModal.style.display="block";
    //initNetwork(setID);
    setID("100");
}
function hideStartModal(){
    console.log("Hiding start modal");
    startModal.style.display="none";
}

function setID(ID){
    $("#connection-id").text("Connection Code: " + ID);
    // https://stackoverflow.com/questions/15757750/how-can-i-call-php-functions-by-javascript
    $.ajax({
        type: "POST",
        url: "php/connection.php",
        dataType: 'json',
        data: {funcName: 'readConnectionIDS'},
        success: function (obj, textstatus){
            if(!('error' in obj)){
                console.log("Success ajax");
            }
            else{
                console.log(obj.error);
            }
        },
        error: function(obj){
            console.log("Error "+ obj);
        },
        timeout : "100"
    })
    .done(function(){
        console.log("success");
    })
    .fail(function(){
        console.log("fail in setID");
    })
    .always(function(){
        console.log("completed");
    });
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