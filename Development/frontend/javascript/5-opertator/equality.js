function myIsNaN(value){
    if(typeof value !='number'){//typeof
        return false;
    }
    return value!==value;

}
function getSign(value){
    if(value===0){
        return Object.is(value,-0)?"-":"+"
    }
    return value>0 ?"+":"-"
 
}
console.log("get sign method")
console.log(getSign(-0))
console.log(myIsNaN(NaN))
// console.log("number"!=="string")
// console.log(5!==10)


// let a=20
// let b=10
// console.log(a==b)          // false
// console.log(a!=b)          // true
// console.log(a===b)         // false
// console.log(a!==b)         // true
// console.log(null==null)    // true
// console.log(null===null)   // true
// console.log(null==undefined)  // true
// console.log(null===undefined) // false
// console.log(NaN==NaN)      // false
// console.log(NaN===NaN)     // false
//NaN is the ONLY value that is NOT equal to itself
// console.log(0==-0)           // true
// console.log(+0==-0)          // true
// console.log(1==-1)           // false
// console.log(isNaN(NaN))
// console.log(Object.is(0,-0)) // false