console.log("123"==123)
console.log(1=='1')
console.log(0=='')
console.log(0==false)
console.log(null==undefined)
console.log("=== operator------")
console.log("123"===123)
console.log(1==='1')
console.log(0==='')
console.log(0===false)
console.log(null===undefined)

// 🔹 1. == (Loose Equality)
// 👉 Compares value only (does type conversion)
console.log(0 == false)        // true
console.log("5" == 5)          // true
console.log(null == undefined) // true
// 🔹 2. != (Loose Inequality)
// 👉 Opposite of == (also does type conversion)
console.log(0 != false)        // false
console.log("5" != 5)          // false
console.log(null != undefined) // false


// 🔹 3. === (Strict Equality)
// 👉 Compares value + type (NO conversion)

console.log(0 === false)       // false
console.log("5" === 5)         // false
console.log(5 === 5)           // true

// 4 !== (strict inequality)
// value OR type is different → result is true

console.log(0 !== false)       // true
console.log("5" !== 5)         // true
console.log(5 !== 5)           // false



