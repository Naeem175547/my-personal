let arr=[1,2,3,5,7];
let x =arr[Symbol.iterator]();
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())


// if(x.next().done==true){
//     console.log("iterator is completed")
// }else{
//     console.log("iteraotr in not completed;")
// }

while(true){
    let next=x.next()
    if(next.done==true){
        console.log("completed")
        break
    }
    console.log(next.value)
}