function replaceText(selector){
    let newTextString="";
    let text = $(selector).text();
    [...text].forEach((char)=>{
        newTextString += '<div class="letter" style="top:'+
        Math.random()*2
        +'em ">'+char+'</div>';
    });
    $(selector).html(newTextString);
}