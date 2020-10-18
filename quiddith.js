// function hasEnoughPlayers(team){
//     if(team.length===7){
//         return true;
//     }
//     return false;
// }


// var team=["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
// console.log(hasEnoughPlayers(team));

// var turnIntoAString=["U", "d", "a", "c", "i", "t", "y"];
// console.log(turnIntoAString.join(""));

var donuts=["jelly donut", "chocolate donut", "glazed donut"];
for(let i=0;i<donuts.length;i++){
    donuts[i]+=" hole";
    donuts[i]=donuts[i].toUpperCase();
}

console.log(donuts);
