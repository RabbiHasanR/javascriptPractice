function makeLine(length){
    var line="";
    for(let j=1;j<=length;j++){
        line+="* ";
    }
    return line+"\n";
}

function buildTriangle(length){
    var tringle="";
    var lineNumber=1;
    for(lineNumber=1;lineNumber<=length;lineNumber++){
        tringle=tringle+makeLine(lineNumber)
    }
    return tringle;
}

console.log(buildTriangle(3));