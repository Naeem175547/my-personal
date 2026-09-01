function customIterator(arr){
    let idx=0;
     function next(){
        if(idx==arr.lenght){
            return {value:undefined,done:true};
        }
        else{
            const nextElement=arr[idx];
            idx++;
            return {value:nextElement,done:false}
        }
     }
     console.log({next})
     return {next}
                                                                                                                                                                                                                                                                            
}
let arr=[1,2,3,4,5];
let x=customIterator(arr);
console.log(x.next())
console.log(x.next())





console.log("second...Example")

const myIterableObject = {
    data: [1, 2, 3, 4],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                return index < this.data.length
                    ? { value: this.data[index++], done: false }
                    : { value: undefined, done: true };
            }
        };
    }
};

const iterator2 = myIterableObject[Symbol.iterator]();

console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: false }
console.log(iterator2.next()); // { value: 4, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }
