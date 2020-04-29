// Get the modal
var modal = document.getElementById("score");

function displayScore_multi(score1, score2){
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
function displayScore(score){
    modal.style.display = "block";
    if(score >= 47){
        $("div.score-content").append('<h1 class="score-header">You Win!</h1>');
    }
    else{
        $("div.score-content").append('<h1 class="score-header">Game Over!</h1>');
    }
    $("div.score-content").append("<p>You Scored: " + score);
    $("div.score-content").append('<div style="text-align: center;">'+
    '<div onClick="startHelper()" class="btn-done">Done</div>'+
    '</div');
}
function startHelper(){
    location.reload();
}
