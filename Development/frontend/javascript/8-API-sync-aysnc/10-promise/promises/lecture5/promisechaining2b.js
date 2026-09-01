function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time);
    });
}

createPromise(1000) // returns pr1 {value: undefined, state: pending, onFulFilled: [f], onRejected: []}
.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
}, function r1(value) {
    // rejection callback for pr1

    console.log("Executing r1 guys wohooooo", value);
    throw 700;//will search first onrejected or catch and that will return fulfilled promise 


}) 
.then(function g(value) {
    // fulfill callback for pr2
    console.log("Value in second then", value);
    return value*2;
}) 
.then(function h(value) {
    console.log("Value in third then", value);
    
    return value*2;
})
.catch((val)=>console.log(val));




