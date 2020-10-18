// var favoriteMovie =function displayFavorite(name){
//     console.log("My favorite movie is " + name);
// }

function movies(messageFunction,name){
    messageFunction(name);
}

movies(function displayFavorite(name){
    console.log("My favorite movie is " + name);
},"Finding Nemo");