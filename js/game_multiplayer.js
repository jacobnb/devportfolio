const input2 = {
    currentKey: "Down",
    curDirection: null
}
var snake2 = new Snake(60,0);
var prevUpdateTime = 0;
const NETWORK_TIME = 20;
function start_multi(){
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
    window.requestAnimationFrame(gameLoop_multi);
    window.requestAnimationFrame(networkingUpdate);
    // replaceText("div#lead-content h1");
    // replaceText("div#lead-content h2");
    addInputListener_multi();
}

function gameLoop_multi(startTime) {
    startTime = Date.now();
    let shouldPlay = true;
    shouldPlay = shouldPlay && updateSnake(snake1, input1);
    shouldPlay = shouldPlay && updateSnake(snake2, input2);
    if(!shouldPlay){
        GamePlaying = false;
        removeInputListener_multi();
        displayScore(getScore(snake1), getScore(snake2));
    }
    if(GamePlaying){
        prevUpdateTime = startTime;
        setTimeout(() => {
            window.requestAnimationFrame(gameLoop_multi);
        }, GAME_LOOP_TIME);
    }
}

function networkingUpdate(){
    // get our current input. done
    // send next input message
    sendGameMessage("input", input1.currentKey, snake1.position);
    // read next input message? do we need to queue it or just read the realtime one?
    if(inputqueue.length > 0){
        let mes = inputqueue.pop();
        readNetworkInput(mes.mes);
        snake2.lastUpdateTime = mes.time;
        if(mes.pos && snake2.position != mes.pos){
            //sync.
            console.log("Sync");
            snake2.position = mes.pos;
        }
    }
    setTimeout(() => {
        window.requestAnimationFrame(networkingUpdate);
    }, NETWORK_TIME);
}
function removeInputListener_multi(){
    console.log("remove Input Listener");
    document.removeEventListener("keydown", inputListener)
}
function addInputListener_multi(){
    console.log("add input listener")
    document.addEventListener("keydown", inputListener);
}
function readNetworkInput(mes){
    switch(mes){
        case "Left":
                if(input2.curDirection!="Right")
                input2.currentKey = "Left";
                break;
            case "Down":
                if(input2.curDirection != "Up")
                input2.currentKey = "Down";
                break;
            case "Up":
                 if(input2.curDirection != "Down")
                input2.currentKey = "Up";
                break;
            case "Right":
                if(input2.curDirection != "Left")
                input2.currentKey = "Right";
                break;
            default:
                console.log("Key pressed" + event.key);
    }
}
function inputListener_multi(event)
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
        snake1.lastUpdateTime = Date.now();
}