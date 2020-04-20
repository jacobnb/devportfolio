const GRID_SIZE = 2;
const GAME_LOOP_TIME = 200;
let GamePlaying = false;
var snake1;
let date = new Date();
snake1 = new Snake(0,0);
var snake2 = new Snake(60,0);
const input1 = {
    currentKey: null,
    curDirection: null
}
const input2 = {
    currentKey: null,
    curDirection: null
}
$("#startGame").click(()=>{displayStartModal();});
$("#play-single").click(()=>{hideStartModal(); startLocal();});
function startLocal() {
    //Delete header
    $("header.sticky").hide();
    $("body#plain").addClass("disable-scroll");
    $("a[href$='JacobBiedermanResume.pdf']").hide();
    
    var wip = document.createElement("div");
    wip.style = "position:fixed; width:100%; height:fit-content; z-index:2; background-color: yellow";
    wip.innerHTML = "<p style='text-align:center; font-size:2em;font-weight:999;margin-top:2px;margin-bottom:2px'>Work In Progress</p>";
    $("body").prepend(wip);
    // make the snake head and add it to the screen
    snake1.self = document.createElement("div");
    snake1.self.classList.add("snake-head");
    $("body").prepend(snake1.self);
    snake1.last = snake1;
    snake1.startTime = date.getTime();
    snake1.name = "Player 1";
    snake1.alive = true;

    snake2.self = document.createElement("div");
    snake2.self.classList.add("snake-head");
    $("body").prepend(snake2.self);
    snake2.last = snake2;
    snake2.startTime = date.getTime();
    snake2.name = "Player 2";
    snake2.alive = true;

    GamePlaying = true;
    window.requestAnimationFrame(gameLoop);
    replaceText("div#lead-content h1");
    replaceText("div#lead-content h2");
};

 
//click the start! button so I don't have to.
// $("#startGame").click();
// setTimeout(()=>{$("#testButton").click();}, .2);
// setTimeout(()=>{$("#PlayGame").click();}, .2);


function gameLoop(deltaTime) {
    let shouldPlay = true;
    shouldPlay = shouldPlay && updateSnake(snake1, input1);
    shouldPlay = shouldPlay && updateSnake(snake2, input2);
    if(!shouldPlay){
        GamePlaying = false;
        displayScore(getScore(snake1), getScore(snake2));
    }
    if(GamePlaying){
        setTimeout(() => {
            window.requestAnimationFrame(gameLoop)
        }, GAME_LOOP_TIME);
    }
}

function collisionManager(snake){
    let arr = $("div#food").toArray();
    let snakeBox = snake.self.getBoundingClientRect();
    arr.forEach(element => {
        let foodBox = element.getBoundingClientRect();
        let colX=false, colY=false;
        if(snakeBox.x > foodBox.x){
            colX = (foodBox.x + foodBox.width) > snakeBox.x;
        }
        else{
            colX = (snakeBox.x + snakeBox.width) > foodBox.x;
        }
        if(snakeBox.y > foodBox.y){
            colY = (foodBox.y + foodBox.width) > snakeBox.y;
        }
        else{
            colY = (snakeBox.y + snakeBox.width) > foodBox.y;
        }
        if(colY && colX){
            element.id = "";
            element.style = "";
            makeSnakeBody(snake.position.x,snake.position.y, snake);
        }
    });
    const pad = 1;
    arr = $("div.snake-body").toArray();
    arr.forEach(element => {
        let body = element.getBoundingClientRect();
        let colX=false, colY=false;
        colX = snakeBox.left+pad < body.right && snakeBox.right-pad > body.left;
        colY = snakeBox.top+pad < body.bottom && snakeBox.bottom-pad > body.top;
        if(colY && colX){
            console.log(snake.name + " Lasted "+ (new Date().getTime() - snake.startTime)/1000 + " seconds");
            snake.alive = false;
        }
    });
    // TODO: check for edge of screen
    // TODO: check for special buttons.
}



document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowLeft":
            if(input1.curDirection!="Right")
            input1.currentKey = "Left";
            event.preventDefault();
            break;
        case "a":
            if(input2.curDirection!="Right")
            input2.currentKey = "Left";
            event.preventDefault();
            break;
        case "ArrowDown":
            if(input1.curDirection != "Up")
            input1.currentKey = "Down";
            event.preventDefault();
            break;
        case "s":
            if(input2.curDirection != "Up")
            input2.currentKey = "Down";
            event.preventDefault();
            break;
        case "ArrowUp":
             if(input1.curDirection != "Down")
            input1.currentKey = "Up";
            event.preventDefault();
            break;
        case "w":
            if(input2.curDirection != "Down")
            input2.currentKey = "Up";
            event.preventDefault();
            break;
        case "ArrowRight":
            if(input1.curDirection != "Left")
            input1.currentKey = "Right";
            event.preventDefault();
            break;
        case "d":
            if(input2.curDirection != "Left")
            input2.currentKey = "Right";
            event.preventDefault();
            break;

    }

});