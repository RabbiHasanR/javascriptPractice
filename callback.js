var catSays=function(max){
    var catMessage="";
    for(var i=0;i<max;i++){
        catMessage+="meow";
    }

    return catMessage;
}

function helloCat(callBackFunc){
    return "Hello "+callBackFunc(3);
}

console.log(helloCat(catSays));


var favoriteMovie=function movie(){
    return "The fountain!";
}

console.log(favoriteMovie());