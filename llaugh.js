function laugh(num){
    var sound="";
    for(let i=0;i<num;i++){
        sound+="ha"
    }
    sound+="!";
    return sound;
}

console.log(laugh(3));