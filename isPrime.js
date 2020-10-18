// function isPrime(integer){
//     for(let x=2;x<integer;x++){
//         if(integer%x===0){
//             console.log(integer+" is divided by "+x);
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(49));

function isThisWorking(input){
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
}

console.log(isThisWorking(3));
