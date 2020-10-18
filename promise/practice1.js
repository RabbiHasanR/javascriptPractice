function job(){
    return new Promise(function(resolve,reject){
        reject();
    })
}

let promise=job();

promise.then(function(){
    console.log('success 1');
}).then(function(){
    console.log('success 2')
}).then(function(){
    console.log('success 3')
}).catch(function(){
    console.log('error 1')
}).then(function(){
    console.log('success 4')
})