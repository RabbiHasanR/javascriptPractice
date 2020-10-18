var momPromise = new Promise(function(resolve,reject){
    momSaving=2000;
    priceOfPhone=6000;
    if(momSaving>priceOfPhone){
        resolve({
            brand: "iphone",
            model: "6s"
        });
    }else{
        reject("We donot have enough savings. Let us save some more money.");
    }
});

momPromise.then(function(value){
    console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
})
.catch(function(reason){
    console.log("Mom coudn't buy me the phone because ", reason);
})
.finally(function(){
    console.log(
        "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
      );
});