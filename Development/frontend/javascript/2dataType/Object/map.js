// ======================
// 🧠 Map in JavaScript (new Map())
// ======================

// 🔹 What is Map?
// A Map is a collection of key–value pairs where:
// - Keys can be ANY type (object, function, primitive)
// - Maintains insertion order
// - No duplicate keys

// ======================
// 🔹 Create Map
// ======================
let map = new Map();


// ======================
// 🔹 Add values
// ======================
map.set("name", "Naeem");
map.set(1, "number key");
map.set(true, "boolean key");

console.log(map);
// Output: Map(3) {"name" => "Naeem", 1 => "number key", true => "boolean key"}


// ======================
// 🔹 Get value
// ======================
console.log(map.get("name")); // Naeem
console.log(map.get(1));      // number key


// ======================
// 🔹 Check key exists
// ======================
console.log(map.has("name")); // true
console.log(map.has("age"));  // false


// ======================
// 🔹 Size of map
// ======================
console.log(map.size); // 3


// ======================
// 🔹 Delete key
// ======================
map.delete(1);
console.log(map);
// Output: Map(2) {"name" => "Naeem", true => "boolean key"}


// ======================
// 🔹 Clear map
// ======================
let tempMap = new Map();
tempMap.set("a", 1);
tempMap.clear();
console.log(tempMap); // Map(0) {}


// ======================
// 🔹 Looping Map
// ======================

// for...of
for (let [key, value] of map) {
  console.log(key, value);
}

// forEach
map.forEach((value, key) => {
  console.log(key, value);
});


// ======================
// 🔹 Map with initial values
// ======================
let m2 = new Map([
  ["a", 1],
  ["b", 2]
]);

console.log(m2);
// Output: Map(2) {"a" => 1, "b" => 2}


// ======================
// 🔹 Keys, Values, Entries
// ======================
console.log([...m2.keys()]);   // ["a", "b"]
console.log([...m2.values()]); // [1, 2]
console.log([...m2.entries()]); // [["a",1],["b",2]]


// ======================
// 🔹 Objects as keys
// ======================
let objKey = { id: 1 };

map.set(objKey, "object value");

console.log(map.get(objKey)); // object value


// ======================
// 🔹 Difference: Map vs Object
// ======================

// Object
let obj = {};
obj[1] = "a";
obj["1"] = "b";
console.log(obj); // {1: "b"} → keys converted to string

// Map
let map2 = new Map();
map2.set(1, "a");
map2.set("1", "b");

console.log(map2);
// Output: Map(2) {1 => "a", "1" => "b"}


// ======================
// 🎯 Final One-Line
// ======================
// Map is a key–value collection where keys can be any type and order is preserved.
// | Feature      | Object        | Map                    |
// | ------------ | ------------- | ---------------------- |
// | Order        | Mixed rules   | Always insertion order |
// | Key type     | string/symbol | any type               |
// | Numeric keys | sorted        | not sorted             |


// ======================
// 🧠 Map Methods (Only Names)
// ======================

// new Map()
// set()
// get()
// has()
// delete()
// clear()
// size (property)
// keys()
// values()
// entries()
// forEach()