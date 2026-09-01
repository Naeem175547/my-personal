console.log(0/0)
console.log(NaN-1)
console.log(NaN*1)
console.log(NaN+NaN)
console.log(0 / 0);            // NaN
console.log(Number("hello"));    // NaN
// console.log("abc" * 2);          // NaN
console.log(typeof NaN);         // "number"
console.log(NaN === NaN);        // false
let x = NaN;
console.log(x === NaN);          // false (wrong way)
console.log(isNaN(x));           // true
console.log(Number.isNaN(x));    // true (best way)