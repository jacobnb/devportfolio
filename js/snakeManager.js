let Snake = function(x,y){
    this.self= null;
    this.position= {
        x: x,
        y: y
    };
    this.prev= null;
    this.last= null;
};

 
function makeSnakeBody(x,y, head){
    // add a body after last.
    let snek = new Snake(x,y);
    snek.self = document.createElement("div");
    snek.self.classList.add("snake-body");
    // snake body position is inherited then
    $("body").prepend(snek.self);
    snek.prev = head.last;
    head.last = snek;
    snek.self.style.marginTop = "1000 em";
    snek.self.style.marginLeft = "1000 em";
}