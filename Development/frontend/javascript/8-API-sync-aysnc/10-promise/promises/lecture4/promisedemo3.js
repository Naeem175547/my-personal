function createSyncPromise() {
    return new Promise((res, rej) => {
        // async algorithm
        res("sucess");
        for(let i = 0; i < 10000000000; i++) {
            // blocking code
        }

        // res("sucess");
    });
}

const response = createSyncPromise();
console.log(response)