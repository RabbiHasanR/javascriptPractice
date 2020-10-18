# What is promise?
promise use for defferred and asynchronous computation.Asynchronous work not like synchronous.synchronous work execute one by one.like complete first work then execute second work but asynchronous work
not execute same time.like first work complete lately but second work complete first.some asynchronous work example:
network request,event ,thread and long runing task. 

# Promise syntext
```let promise=new Promise(function(resolve,reject){});```

here Promise object constructor function pass the exeecutor function.when promise object is created executor runs automatically.executor function contains producing code which should eventually produce the result.
its arguemnt resolve and reject are callbacks which provides by javascript itself.when producer obtains results it soon or later it does not matter .then call one of callback;
if result is successfully produce then call resolve() and pass result value in resolve(value) callback.if error occur then call reject() call back and pass erro in reject (error);

# A promise can be:
1.fulfilled: when promise is succeed then promise is fulfilled.
2.reject : when promise is unseccess then promise is reject.
3.pending; promise has not fulfilled and reject yet.
4.settle: promise has fulfilled or reject.

# Use case of Promise:
1.asynchronous operation
2.network operation
3.threading operation
4.long runing operation
promises are generally used for easier handling of anychronous operation or blocking code.for example:
1.file operations
2.API calls
3.DB calls
4.IO calls

# Thenable and catch Promise Example:
```function job(){
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
})```

### Above program output:
```error 1
 success 4
```