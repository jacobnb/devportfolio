let Snake = function(x,y){
    this.self= null;
    this.position= {
        x: x,
        y: y
    };
    this.prev= null;
    this.last= null;
    this.lastUpdateTime = 0;
};

var snakeLength = 0;
function makeSnakeBody(x,y, head){
    snakeLength++;
    console.log(snakeLength);
    if(snakeLength > 49){
        head.alive = false;
    }
    // add a body after last.
    let snek = new Snake(x,y);
    snek.self = document.createElement("div");
    snek.self.classList.add("snake-body");
    // snake body position is inherited then
    $("body").prepend(snek.self);
    snek.prev = head.last;
    head.last = snek;
    snek.self.style.marginTop = '5000px';
    snek.self.style.marginLeft = '5000px';
}

function killSnake(snakeHead){

}

function getScore(snakeHead){
    let score=0;
    let snek=snakeHead.last;
    while(snek != snakeHead){
        snek=snek.prev;
        score++;
    }
    return score;
}
function updateSnake(snakeHead, input){
    if(snakeHead.alive){
        updateSnakePosition(snakeHead, input);
        collisionManager(snakeHead);
        return true;
    }
    else{
        return false;
    }
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

    snake.self.style.marginTop = snake.position.y + 'px';
    snake.self.style.marginLeft = snake.position.x + 'px';
}