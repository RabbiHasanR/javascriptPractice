let p1=new Promise(function(resolve,reject){
    setTimeout(resolve,500,'p1');
});

let p2=new Promise(function(resolve,reject){
    setTimeout(resolve,1000,'p2');
});
let p3=new Promise(function(resolve,reject){
    setTimeout(resolve,1200,'p3');
});
let p4=new Promise(function(resolve,reject){
    setTimeout(reject,300,'p4');
});
let p5=new Promise(function(resolve,reject){
    setTimeout(resolve,800,'p5');
});

//when one promise is rejected then show error and can't access the other promise result if even success
// let promises=Promise.all([p1,p2,p3,p4,p4]);

// promises.then(function(data){
//     data.forEach(function(data){
//         console.log(data);
//     })
// }).catch(function(error){
//     console.log('error '+error);
// })


//In this example, we don't give the promises directly to Promise.all. We give the result of p.catch (this is an auto-resolved promise) so Promise.all won't stop. In this case, however, you have to test the received data yourself to check for errors.

let promises=Promise.all([p1.catch(function(error){console.log(error);}),p2.catch(function(error){console.log(error);}),p3.catch(function(error){console.log(error);}),p4.catch(function(error){console.log(error);}),p5.catch(function(error){console.log(error);})]);

promises.then(function(data){
    data.forEach(function(data){
        console.log(data);
    })
}).catch(function(error){
    console.log('error '+error);
})