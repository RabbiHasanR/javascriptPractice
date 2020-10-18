// var catSays=function(max){
//     var catMessage="";
//     for(var i=0;i<max;i++){
//         catMessage+="meow";
//     }
//     return catMessage;
// }

// console.log(catSays(5));
//console.log(catSays);


function cat(){
    console.log(purr());
    var meow=function(max){
        var catMessage="";
        for(var i=0;i<max;i++){
            catMessage+="meow";
        }
        return catMessage;
    }
    console.log(meow(3));
    function purr(){
        return "purrr!";
    }
}

cat();