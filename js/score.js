// Get the modal
var modal = document.getElementById("score");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function displayScore(score1, score2){
    modal.style.display = "block";
    if(score1> score2){
        $("div.score-content").append('<h1 class="score-header">Player 1 Wins!</h1>');
    }
    else{
        $("div.score-content").append('<h1 class="score-header">Player 2 Wins!</h1>');
    }
    $("div.score-content").append("<p>Player 1 Scored: " + score1 + " <br />Player 2 Scored: " + score2 + "</p>");
    $("div.score-content").append('<div style="text-align: center;">'+
    '<div onClick="startHelper()" class="btn-done">Done</div>'+
    '</div');
}
function startHelper(){
    location.reload();
}