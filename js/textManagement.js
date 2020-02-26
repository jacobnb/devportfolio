function replaceText(selector){
    var newTextString="";
    let text = $(selector).text();
    [...text].forEach((char)=>{
        newTextString += '<div class="letter" id="food" style="top:'+
        Math.random()*2
        +'em; color:red">'+char+'</div>';
    });
    $(selector).html(newTextString);
}
