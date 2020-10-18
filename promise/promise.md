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
1. fulfilled: when promise is succeed then promise is fulfilled.
2. reject : when promise is unseccess then promise is reject.
3. pending; promise has not fulfilled and reject yet.
4. settle: promise has fulfilled or reject.

# Use case of Promise:
1. asynchronous operation
2. network operation
3. threading operation
4. long runing operation
promises are generally used for easier handling of anychronous operation or blocking code.for example:
1. file operations
2. API calls
3. DB calls
4. IO calls

# Thenable and catch Promise Example:

## Example 1:
```javascript
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
});
```

### Example 1 output:
```
error 1
success 4
```

## eaxmple 2:
```javascript
function job(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve('success');
        }else{
            reject('error');
        }
    })
}

let promise=job(true)

promise.then(function(data){
    console.log(data)
    return job(false)
}).catch(function(error){
    console.log(error);
    return 'Error Caught';
}).then(function(data){
    console.log(data)
    return job(true);
}).catch(function(error){
    console.log(erro)
});
```

### Example 2 output:
```
success
error
Error Caught
```

## Example 3:
```javascript
function job(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve('success');
        }else{
            reject('error');
        }
    });
}

let promise=job(true);

promise.then(function(data){
    console.log(data);
    return job(true);
}).then(function(data){
    if(data!=='victory'){
        throw 'Defate';
    }
    return job(true);
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
    return job(false);
}).then(function(data){
    console.log(data);
    return job(true);
}).catch(function(error){
    console.log(error);
    return 'Error caught';
}).then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});

```

### Example 3 output:
```
success
Defate
error
Error caught
Success: test
```

# finally
finally() clause for anything happen like resolve() or reject it should stop the execution and do something for finally .finally() handeler no aruguments but .then() and .catch() has arguments or none.
## Example:
```javascript
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
```

### output:
```
Mom coudn't buy me the phone because  We donot have enough savings. Let us save some more money.
Irrespecitve of whether my mom can buy me a phone or not, I still love her
```

# Promise has four static methods:
Promise.resolve():helps created static resolve() promise
Promise.reject():helps created static reject() promise
Promise.all():sometime  multiple asynchronous task to perform and  start something when every task is done.when using promise you can do that Promise.all().It returns array of promise.
promise.race():The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises 

### Promise.all() example:
```javascript
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
let promises=Promise.all([p1,p2,p3,p4,p4]);

promises.then(function(data){
    data.forEach(function(data){
        console.log(data);
    })
}).catch(function(error){
    console.log('error '+error);
})


//In this example, we don't give the promises directly to Promise.all. We give the result of p.catch (this is an auto-resolved promise) so Promise.all won't stop. In this case, however, you have to test the received data yourself to check for errors.

let promises=Promise.all([p1.catch(function(error){console.log(error);}),p2.catch(function(error){console.log(error);}),p3.catch(function(error){console.log(error);}),p4.catch(function(error){console.log(error);}),p5.catch(function(error){console.log(error);})]);

promises.then(function(data){
    data.forEach(function(data){
        console.log(data);
    })
}).catch(function(error){
    console.log('error '+error);
})
```

# Promise.race() example:
```javascript
var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });

//case 1

//All the promises are run in parallel. The third promise resolves in two seconds. As soon as this is done the promise returned by Promise.race is resolved.

console.time("Promise.race");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(3));
promisesArray.push(promiseTRSANSG(2));
promisesArray.push(promiseTRSANSG(3));
promisesArray.push(promiseTRSANSG(4));
var promisesRace = Promise.race(promisesArray);
promisesRace.then(function(values) {
  console.timeEnd("Promise.race");
  console.log("The fasted promise resolved", values);
})
.catch(function(reason) {
  console.timeEnd("Promise.race");
  console.log("The fastest promise rejected with the following reason ", reason);
});


//case 2
//All the promises are run in parallel. The fourth promise rejected in three seconds. As soon as this is done the promise returned by Promise.race is rejected.

console.time("Promise.race2");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(6));
promisesArray.push(promiseTRSANSG(5));
promisesArray.push(promiseTRSANSG(3));
promisesArray.push(promiseTRSANSG(4));
var promisesRace = Promise.race(promisesArray);
promisesRace.then(function(values) {
  console.timeEnd("Promise.race2");
  console.log("The fasted promise resolved", values);
})
.catch(function(reason) {
  console.timeEnd("Promise.race");
  console.log("The fastest promise rejected with the following reason ", reason);
});
```


