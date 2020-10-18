// var myArray=[1,2,3,4,5,6];

// function myAwesomeFunction(element,index,array){
//     console.log("element:"+element);
//     console.log("index:"+index);
//     console.log("array:"+array);
// }

// myArray.forEach(myAwesomeFunction);

// var donuts=["jelly donut", "chocolate donut", "glazed donut"];



// donuts.forEach(function(donut){
//     donut+=" hole";
//     donut=donut.toUpperCase();
//     console.log(donut)
// });

// var words=["cat", "in", "hat"];
// words.forEach(function(word,num,all){
//     console.log("Word " + num + " in " + all.toString() + " is " + word);
// });

// var myArray=[1,2,3,4,5];
// var newArray=myArray.map(function(elem){
//     elem+=100;
//     return elem
// });
// console.log(myArray);
// console.log(newArray);

var donuts=["jelly donut", "chocolate donut", "glazed donut"];
var improvedDonuts = donuts.map(function(donut){
    donut+=" hole";
    donut = donut.toUpperCase();
    return donut;
});

console.log(donuts);
console.log(improvedDonuts);