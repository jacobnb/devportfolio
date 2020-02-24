const GRID_SIZE = 2;
const GAME_LOOP_TIME = 200;
let GamePlaying = false;
const input = {
    currentKey: null,
    curDirection: null
}

function makeSnake(x,y){
    this.self= null,
    this.position= {
        x: x,
        y: y
    },
    this.prev= null,
    this.last= null
}

const snake = {
    self: null,
    position: {
        x: 0,
        y: 0
    },
    prev: null,
    last: null
}
$("#startGame").click(function () {
    //Delete header
    $("header.sticky").hide();
    $("body#plain").addClass("disable-scroll");
    $("a[href$='JacobBiedermanResume.pdf']").hide();

    // make the snake head and add it to the screen
    snake.self = document.createElement("div");
    snake.self.classList.add("snake-head");
    $("body").prepend(snake.self);
    snake.last = snake;
    // Add play game button and click listener
    let playGame = '<a href="#" class="btn-rounded-white" id="PlayGame">Play Game!</a>'
    $("div#lead-content").append(playGame);
    $('#PlayGame').click(function () {
        GamePlaying = true;
        window.requestAnimationFrame(gameLoop);
    });
    let testButton = '<a href="#" class="btn-rounded-white" id="testButton">Test!</a>'
    $("div#lead-content").append(testButton);
    $('#testButton').click(function () {
        replaceText("div#lead-content h1");
        replaceText("div#lead-content h2");
    });
});
function makeSnakeBody(x,y){
    // add a body after last.
    let snek = new makeSnake(x,y);
    snek.self = document.createElement("div");
    snek.self.classList.add("snake-body");
    // snake body position is inherited then
    $("body").prepend(snek.self);
    snek.prev = snake.last;
    snake.last = snek;
    snek.self.style.marginTop = "1000 em";
    snek.self.style.marginLeft = "1000 em";
}

//click the start! button so I don't have to.
$("#startGame").click();
setTimeout(()=>{$("#testButton").click();}, .2);
setTimeout(()=>{$("#PlayGame").click();}, .2);


function gameLoop(deltaTime) {
    updateSnakePosition();
    collisionManager();
    if(GamePlaying){
        setTimeout(() => {
            window.requestAnimationFrame(gameLoop)
        }, GAME_LOOP_TIME);
    }
}

function collisionManager(){
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
            makeSnakeBody(snake.position.x,snake.position.y);
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
            console.log("You Lose")
            GamePlaying = false;
        }
    });
    // TODO: check for edge of screen
    // TODO: check for special buttons.
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