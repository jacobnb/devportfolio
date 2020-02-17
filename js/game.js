const GRID_SIZE = 2;
const GAME_LOOP_TIME = 200;
const input = {
    currentKey: null,
    curDirection: null
}
const snake = {
    snakeHead: null,
    position: {
        x: 0,
        y: 0
    }
}
$("#startGame").click(function () {
    //Delete header
    $("header.sticky").hide();
    $("body#plain").addClass("disable-scroll");
    $("a[href$='JacobBiedermanResume.pdf']").hide();

    // make the snake head and add it to the screen
    snake.snakeHead = document.createElement("div");
    snake.snakeHead.classList.add("snake-head");
    $("body").prepend(snake.snakeHead);

    // Add play game button and click listener
    let playGame = '<a href="#" class="btn-rounded-white" id="PlayGame">Play Game!</a>'
    $("div#lead-content").append(playGame);
    $('#PlayGame').click(function () {
        window.requestAnimationFrame(gameLoop);
    });
    let testButton = '<a href="#" class="btn-rounded-white" id="testButton">Test!</a>'
    $("div#lead-content").append(testButton);
    $('#testButton').click(function () {
        replaceText("div#lead-content h1");
        replaceText("div#lead-content h2");
    });
});

//click the start! button so I don't have to.
$("#startGame").click();

function gameLoop(deltaTime) {
    updateSnakePosition();
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop)
    }, GAME_LOOP_TIME);
}


function updateSnakePosition() {
    switch (input.currentKey) {
        case "Left":
                snake.position.x -= GRID_SIZE;
            break;
        case "Right":
                snake.position.x += GRID_SIZE;
            break;
        case "Up":
                snake.position.y -= GRID_SIZE;
            break;
        case "Down":
                snake.position.y += GRID_SIZE;
            break;
    }
    input.curDirection = input.currentKey;
    snake.snakeHead.style.marginTop = snake.position.y + 'em';
    snake.snakeHead.style.marginLeft = snake.position.x + 'em';
}
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowLeft":
        case "a":
            if(input.curDirection!="Right")
            input.currentKey = "Left";
            event.preventDefault();
            break;
        case "ArrowDown":
        case "s":
            if(input.curDirection != "Up")
            input.currentKey = "Down";
            event.preventDefault();
            break;
        case "ArrowUp":
        case "w":
            if(input.curDirection != "Down")
            input.currentKey = "Up";
            event.preventDefault();
            break;
        case "ArrowRight":
        case "d":
            if(input.curDirection != "Left")
            input.currentKey = "Right";
            event.preventDefault();
            break;

    }

});