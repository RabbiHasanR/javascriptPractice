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