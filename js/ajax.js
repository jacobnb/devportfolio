// https://stackoverflow.com/questions/15757750/how-can-i-call-php-functions-by-javascript
function makeRequest(dataIn, callback = ()=>{}){
    $.ajax({
        type: "POST",
        url: "php/connection.php",
        dataType: 'json',
        data: dataIn,
        success: function (obj, textstatus){
            if(!('error' in obj)){
                //console.log(obj.result);
                callback(obj);
            }
            else{
                console.error(obj.error);
                callback(false);
            }
        },
        error: function(xhr, type, exception){
            console.log(xhr.responseText);
            console.log("Error : "+ type);
            console.log(exception);
            callback(false);
        },
        timeout : "100"
    })
    .done(function(){
    })
    .fail(function(){
        console.log("fail in ajax.js");
    })
    .always(function(){
    });
}

function makeData(functionName, id = null){
    if(id == null){
        return {funcName: functionName};
    }
    return {funcName: functionName, ID: id}
}