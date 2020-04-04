const GRID_SIZE = 2;
const GAME_LOOP_TIME = 200;
let GamePlaying = false;
var snake1;
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
$("#startGame").click(function () {
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

    snake2.self = document.createElement("div");
    snake2.self.classList.add("snake-head");
    $("body").prepend(snake2.self);
    snake2.last = snake2;
    
    GamePlaying = true;
    window.requestAnimationFrame(gameLoop);
    replaceText("div#lead-content h1");
    replaceText("div#lead-content h2");
});

 
//click the start! button so I don't have to.
// $("#startGame").click();
// setTimeout(()=>{$("#testButton").click();}, .2);
// setTimeout(()=>{$("#PlayGame").click();}, .2);


function gameLoop(deltaTime) {
    updateSnakePosition(snake1, input1);
    updateSnakePosition(snake2, input2);
    collisionManager();
    if(GamePlaying){
        setTimeout(() => {
            window.requestAnimationFrame(gameLoop)
        }, GAME_LOOP_TIME);
    }
}

function collisionManager(){
    let arr = $("div#food").toArray();
    let snakeBox = snake1.self.getBoundingClientRect();
    let snakeBox2 = snake2.self.getBoundingClientRect();
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
            makeSnakeBody(snake1.position.x,snake1.position.y, snake1);
        }

        if(snakeBox2.x > foodBox.x){
            colX = (foodBox.x + foodBox.width) > snakeBox2.x;
        }
        else{
            colX = (snakeBox2.x + snakeBox2.width) > foodBox.x;
        }
        if(snakeBox2.y > foodBox.y){
            colY = (foodBox.y + foodBox.width) > snakeBox2.y;
        }
        else{
            colY = (snakeBox2.y + snakeBox2.width) > foodBox.y;
        }
        if(colY && colX){
            element.id = "";
            element.style = "";
            makeSnakeBody(snake2.position.x,snake2.position.y, snake2);
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
            console.log("Player 1 Loses");
            GamePlaying = false;
        }
        colX = snakeBox2.left+pad < body.right && snakeBox2.right-pad > body.left;
        colY = snakeBox2.top+pad < body.bottom && snakeBox2.bottom-pad > body.top;
        if(colY && colX){
            console.log("Player 2 Loses");
            GamePlaying = false;
        }
    });
    // TODO: check for edge of screen
    // TODO: check for special buttons.
}

function updateSnakePosition(snake, input) {
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

    let snek = snake.last;
    while(snek.prev != null){
        snek.self.style.marginTop = snek.prev.self.style.marginTop;
        snek.self.style.marginLeft = snek.prev.self.style.marginLeft;
        snek = snek.prev;
    }

    snake.self.style.marginTop = snake.position.y + 'em';
    snake.self.style.marginLeft = snake.position.x + 'em';
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