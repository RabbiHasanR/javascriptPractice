var price=100.50;
var money=100.50;

if(money>price){
    console.log("You paid extra, here's your change.");
}else if(money===price){
    console.log("You paid the exact amount, have a nice day!");
}else{
    console.log("That's not enough, you still owe me money.");
}


var runner="Kendyll";
var position=2;
var medal;

if (position===1){
    medal="gold";
}else if (position===2){
    medal="silver";
}else if(position===3){
    medal="bronze";
}else{
    medal="pat on the back";
}

console.log(runner + " received a " + medal + " medal.")