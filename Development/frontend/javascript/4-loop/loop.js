
// ==========================
// 1. for loop
// ==========================
for (let i = 0; i < 5; i++) {
  console.log("for:", i);
}


// ==========================
// 2. while loop
// ==========================
let i1 = 0;
while (i1 < 5) {
  console.log("while:", i1);
  i1++;
}


// ==========================
// 3. do...while loop
// ==========================
let i2 = 0;
do {
  console.log("do...while:", i2);
  i2++;
} while (i2 < 5);


// ==========================
// 4. for...of (values)
// ==========================
let arr1 = [10, 20, 30];
for (let value of arr1) {
  console.log("for...of:", value);
}


// ==========================
// 5. for...in (keys/index)
// ==========================
let obj = { name: "Naeem", age: 20 };
for (let key in obj) {
  console.log("for...in:", key, obj[key]);
}


// ==========================
// 6. forEach()
// ==========================
let arr2 = [1, 2, 3];
arr2.forEach((value, index,arr) => {
  console.log("forEach:", index, value,arr);
});







// // ==========================
// // 10. for await...of (async)
// // ==========================
// async function asyncLoop() {
//   let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

//   for await (let value of promises) {
//     console.log("for await...of:", value);
//   }
// }

// asyncLoop();
