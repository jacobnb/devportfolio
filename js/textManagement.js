var origNumLetters = 36;
function makeArr(numLetters){
    let arr = [];
    for(let i =0; i < numLetters; i++){
        arr.push(Math.random()*2);
    }
    return arr;
}
function replaceText(selector){
    var newTextString="";
    let text = $(selector).text();
    [...text].forEach((char, index)=>{
        newTextString += '<div class="letter" id="food" style="top:'+
        Math.random()*2
        +'em; color:red">'+char+'</div>';
        console.log(index);
    });
    $(selector).html(newTextString);
}

function replaceTextPredifined(arr, selector){
    var newTextString="";
    let text = $(selector).text();
    [...text].forEach((char, index)=>{
        newTextString += '<div class="letter" id="food" style="top:'+
        arr[index]
        +'em; color:red">'+char+'</div>';
    });
    $(selector).html(newTextString);
}