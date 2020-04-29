const GRID_SIZE = 30;
const GAME_LOOP_TIME = 200;
let GamePlaying = false;
var snake1;
let date = new Date();
snake1 = new Snake(0,0);
const input1 = {
    currentKey: "Down",
    curDirection: null
}
$("#startGame").click(()=>{
    startLocal();
    //displayStartModal();
});
$("#play-single").click(()=>{
    hideStartModal(); 
    startLocal();
});

function startLocal() {
    //Delete header
    $("header.sticky").hide();
    $("#lead-down").hide();
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

    replaceText("div#lead-content h1");
    replaceText("div#lead-content h2");
    addInputListener();
    GamePlaying = true;
    window.requestAnimationFrame(gameLoop);
};

 
//click the start! button so I don't have to.
// $("#startGame").click();
// setTimeout(()=>{$("#testButton").click();}, .2);
// setTimeout(()=>{$("#PlayGame").click();}, .2);

function gameLoop(deltaTime) {
    let shouldPlay = true;
    shouldPlay = shouldPlay && updateSnake(snake1, input1);
    if(!shouldPlay){
        GamePlaying = false;
        removeInputListener(); 
        displayScore(getScore(snake1)); 
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
        console.log();
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
            if(element.innerHTML != " ")
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
    let colX = false;
    let colY = false;
    colX = !(snakeBox.right <= window.screen.width && snakeBox.left >= 0);
    colY = !(snakeBox.bottom <= window.screen.height-100 && snakeBox.top >= 0);
    if(colY || colX){
        console.log(snake.name + " Lasted "+ (new Date().getTime() - snake.startTime)/1000 + " seconds");
        snake.alive = false;
    }
    // TODO: check for special buttons.
}


function removeInputListener(){
    console.log("remove Input Listener");
    document.removeEventListener("keydown", inputListener)
}
function addInputListener(){
    console.log("add input listener")
    document.addEventListener("keydown", inputListener);
}

function inputListener(event)
    {
        switch (event.key) {
            case "ArrowLeft":
                if(input1.curDirection!="Right")
                input1.currentKey = "Left";
                event.preventDefault();
                break;
            case "a":
                if(input1.curDirection!="Right")
                input1.currentKey = "Left";
                event.preventDefault(); 
                break;
            case "ArrowDown":
                if(input1.curDirection != "Up")
                input1.currentKey = "Down";
                event.preventDefault();
                break;
            case "s":
                if(input1.curDirection != "Up")
                input1.currentKey = "Down";
                event.preventDefault();
                break;
            case "ArrowUp":
                 if(input1.curDirection != "Down")
                input1.currentKey = "Up";
                event.preventDefault();
                break;
            case "w":
                if(input1.curDirection != "Down")
                input1.currentKey = "Up";
                event.preventDefault();
                break;
            case "ArrowRight":
                if(input1.curDirection != "Left")
                input1.currentKey = "Right";
                event.preventDefault();
                break;
            case "d":
                if(input1.curDirection != "Left")
                input1.currentKey = "Right";
                event.preventDefault();
                break;
            default:
                console.log("Key pressed" + event.key);
        }
}