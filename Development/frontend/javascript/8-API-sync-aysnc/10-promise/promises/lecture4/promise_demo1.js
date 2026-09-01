function createAsyncPromise() {
    return new Promise((res, rej) => {
        // async algorithm
        setTimeout(function timerCompleted() {
            // lets change the state of promise
            const value = Math.random();
            console.log(value);
            if(value < 0.5) {
                // resolve the promise
                res("fulfilled");
            } else {
                // reject the promise
                rej("rejected");
            }
        }, 5000);
    });
}

const response = createAsyncPromise();
console.log(response);
//resitering
response.then((value)=>{
    console.log(value,response);
},(value)=>{
    console.log(value,response);
})