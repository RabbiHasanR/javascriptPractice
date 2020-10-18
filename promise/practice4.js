function job(delay){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('resolving',delay)
            resolve('done '+delay)
        },delay)
    })
}

let promises=Promise.all([job(1000), job(2000), job(500), job(1500)])

promises.then(function(results){
    console.log('All done');
    results.forEach(function(result){
        console.log(result);
    })
})