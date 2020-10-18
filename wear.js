var shirtWidth=18;
var shirtLength=29;
var shirtSleeve=8.47;

if((shirtWidth<20 && shirtWidth>=18)&&(shirtLength<29 && shirtLength>=28)&&(shirtSleeve<8.38 && shirtSleeve>=8.13)){
    console.log("S");
}else if((shirtWidth<22 && shirtWidth>=20) &&(shirtLength<30 && shirtLength>=29)&&(shirtSleeve<8.63 && shirtSleeve>=8.38)){
    console.log("M");
}else if((shirtWidth<24 && shirtWidth>=22)&&(shirtLength<31 && shirtLength>=30)&&(shirtSleeve<8.88 && shirtSleeve>=8.63)){
    console.log("L"); 
}else if((shirtWidth<26 && shirtWidth>=24)&&(shirtLength<33 && shirtLength>=31)&&(shirtSleeve<9.63 && shirtSleeve>=8.88)){
    console.log("XL");
}else if((shirtWidth<28 && shirtWidth>=26)&&(shirtLength<34 && shirtLength>=33)&&(shirtSleeve<10.13 && shirtSleeve>=9.63)){
    console.log("2XL");
}else if((shirtWidth>=28)&&(shirtLength>=34)&&(shirtSleeve>=10.13)){
    console.log("3XL"); 
}else{
    console.log("NA");
}