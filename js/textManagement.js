function replaceText(selector){
    let text = $(selector).text();
    [...text].forEach((char)=>{
        console.log(char);
    });
}
// TODO: Figure out how to wrap each letter in a div and put back in position