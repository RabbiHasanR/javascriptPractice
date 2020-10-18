// //promise object constructor
// let promise=new Promise(function(resolve,reject){
//     //after 2 seconds job is done with the result 'done'
//     setTimeout(function(){
//         resolve('done');
//     },2000);
// });

// let promise2=new Promise(function(resolve,reject){
//     //after 2 second job is done with an error.
//     setTimeout(function(){
//         reject(new Error('Whoops!'));
//     },2000);
// });

// function showResult(data){
//     console.log(data);
// }

// function finallShow(){
//     console.log('promise ready');
// }
// promise.finally(finallShow).then(showResult);

// function showError(error){
//     console.log(error);
// }
// promise2.finally(finallShow).then(null,showError)

//asynchronous code example with promise

// function loadScript(src){
//     return new Promise(function(resolve,reject){
//         let script =document.createElement('script');
//         script.src=src;
//         script.onload=resolve(script);
//         script.onerror=reject(new Error(`Script load erro for ${src}`));
//     });
// }

// let promise=loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//     function(script){
//         console.log(`${script.src} is loaded`)
//         document.head.append(script);
// },
//     function(error){console.log(error)}
// )

// promise.then(function(script){
//     alert('another handler....');
//     console.log(script.src);
// });


// function delay(ms){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         },ms);
//     });
// }

// delay(3000).then(function(){
//     console.log('runs after 3 seconds');
// })

