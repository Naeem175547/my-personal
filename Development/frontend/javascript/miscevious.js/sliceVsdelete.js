let arr = [1, 2, 3, 3, 4];

console.log(arr);        // [1, 2, 3, 3, 4]
console.log(arr.length); // 5
delete arr[1];           // ❌ removes value but keeps empty slot
console.log(arr[1])//when try to access give undefiend
arr.splice(1, 1);        // ✅ removes element and shifts array
console.log(arr);
console.log(arr.length);

// Empty slot → no value at all
// undefined → value exists but not assigned
// null → intentionally empty value