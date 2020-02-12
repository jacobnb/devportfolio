var currentKey = null;
$("#startGame").click(function () {
    //Delete header
    $("header.sticky").hide();
    $("body#plain").addClass("disable-scroll");
    $("a[href$='JacobBiedermanResume.pdf']").hide();

    // make the snake head and add it to the screen
    var snakeHead = document.createElement("div");
    snakeHead.classList.add("snake-head");
    $("body").prepend(snakeHead);

    // Add play game button and click listener
    let playGame = '<a href="#" class="btn-rounded-white" id="PlayGame">Play Game!</a>'
    $("div#lead-content").append(playGame);
    $('#PlayGame').click(function () {
        window.requestAnimationFrame(gameLoop);
    });
});

//click the start! button so I don't have to.
$("#startGame").click();

function gameLoop(deltaTime) {
    console.log(currentKey);
    window.requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowLeft":
        case "a":
            currentKey="Left";
            event.preventDefault();
            break;
        case "ArrowDown":
        case "s":
            currentKey="Down";
            event.preventDefault();
            break;
        case "ArrowUp":
        case "w":
            currentKey="Up";
            event.preventDefault();
            break;
        case "ArrowRight":
        case "d":
            currentKey="Right";
            event.preventDefault();
            break;

    }

});