// 🧠 What is ?.
// 👉 ?. safely accesses properties
// 👉 If something is null or undefined → it stops and returns undefined
let user = {
  address: {
    city: "Muzaffarnagar"
  }
};

console.log(user?.address?.city);
// It works like this:
// Check user
// if null or undefined → stop → return undefined
// Then check user.address
// if null or undefined → stop → return undefined
// Then access city
//it check left side propery of ?.
console.log(user.address.city) //if user or address not exist then error but only city is not exist then undefinied since city is property(key) and ,user and address are obj
console.log(user.imran)//undefined
// console.log(user.imran.abc)//error
console.log(user.imran["abc"])//error