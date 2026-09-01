// let arr=[1,2,3,3,4]
// console.log(arr)
// console.log(arr.length)
// delete arr[1]//empty slot 
// arr.splice(1,1);//remove index 1 slot
// console.log(arr);
// console.log(arr.length)


// function one(){
//     return 1;
// }
// function tow(){
//     return one()+one();
// }
// function three(){
//     return tow()+one();
// }
// console.log(three())


//iterator

let arr=[1,3,43,3,2,43]
let it=arr[Symbol.iterator]();
// console.log(it.next())
while(true){
    let item=it.next();
    if(item.done==true){
        console.log("completed",item.value)
        break;
    }
    console.log(item.value)
}