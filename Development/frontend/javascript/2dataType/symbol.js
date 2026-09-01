// let x=100n;
// console.log(typeof(x))



let x=Symbol('imran')
// console.log(typeof(x))
// console.log(x)


let user={
    a:1000,
    b:2000,
    [x]:20
}
console.log(user[x])
// for(let key in obj){
//     console.log(key)
// }
console.log(Object.getOwnPropertySymbols(user));
