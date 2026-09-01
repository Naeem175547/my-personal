/*JavaScript Prototypes (Detailed Notes)
1. What is Prototype in JavaScript?

In JavaScript, every object has a hidden property called prototype.
Prototype is another object from which the current object can 
inherit properties and methods.

JavaScript uses Prototype-based Inheritance.
2. Simple Example
const user = {
    name: "Naeem"
}

console.log(user)
Internally, this object is linked to:
Object.prototype

Object.prototype in JavaScript
Object.prototype is the top parent object from which almost all JavaScript objects inherit properties and methods.

It contains common methods like:
toString()
hasOwnProperty()
valueOf()

That is why we can use methods like:

user.toString()
user.hasOwnProperty("name")

Even though we never created them.
Those methods come from the prototype.

3. Prototype Chain

JavaScript searches properties in this order:
Inside the object itself
Inside its prototype
Prototype's prototype
Continues until null

This is called:
Prototype Chain

4. Visual Representation
user
  ↓
Object.prototype
  ↓
null

5. Accessing Prototype
Using __proto__
const obj = {
    name: "Naeem"
}

console.log(obj.__proto__)

Output:
Object.prototype(show all the method and prototype)

Recommended Method
Object.getPrototypeOf(obj)

Example:
console.log(Object.getPrototypeOf(obj))

6. Setting Prototype
Using Object.setPrototypeOf()
const animal = {
    eats: true
}

const dog = {
    barks: true
}
dog.__proto__.sum=10 //this will add sum in prototye of dog
dog.__proto__ = animal//it will put animal property in dog prototype(this is like inheritance)
// Object.setPrototypeOf(dog, animal)

console.log(dog.eats)
Output:
true



7. Prototype Inheritance Example
const person = {
    greet() {
        console.log("Hello")
    }
}

const student = {
    name: "Naeem"
}

Object.setPrototypeOf(student, person)
student.greet()

Output:
Hello


8. Function Prototype
Every function automatically has a property called:
prototype

Example:

function User() {}
console.log(User.prototype)

Output:

{}

This prototype object is used when creating objects using new.

 Constructor Function + Prototype
function User(name) {
    this.name = name
}

User.prototype.sayHello = function () {
    console.log("Hello " + this.name)
}

const u1 = new User("Naeem")

u1.sayHello()
//console.log(u1.__proto__ === User.prototype) true

Output:
Hello Naeem


. What Happens Internally with new
const u1 = new User("Naeem")

Internally JavaScript does:

Step 1

Creates empty object

{}
Step 2

Links object to:
User.prototype

Step 3
this points to new object

Step 4
Returns object automatically


11. Prototype Link
u1
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null

12. Difference Between prototype and __proto__

| Feature   | prototype            | **proto**                  |
| --------- | -------------------- | -------------------------- |
| Exists on | Functions            | Objects                    |
| Purpose   | Used for inheritance | Points to actual prototype |
| Type      | Property             | Hidden reference           |

Example
function User() {}

const u1 = new User()

console.log(User.prototype)
console.log(u1.__proto__)
Both point to same object.

13. Method Sharing Using Prototype

Without prototype:

function User(name) {
    this.name = name

    this.sayHi = function () {
        console.log("Hi")
    }
}

Problem:
Every object gets separate copy of function.

Memory waste.

Better Approach

function User(name) {
    this.name = name
}

User.prototype.sayHi = function () {
    console.log("Hi")
}

Now all objects share one method.

Efficient.

14. Checking Prototype
Using instanceof
function User() {}

const u1 = new User()

console.log(u1 instanceof User)

Output:
true

Because:

User.prototype exists in prototype chain of u1

15. Built-in Prototypes

JavaScript built-in objects also use prototypes.

Examples:

Array.prototype
String.prototype
Object.prototype
Function.prototype

16. Example with Array Prototype
const arr = [1, 2, 3]

console.log(arr.push)

push() comes from:

Array.prototype

17. Adding Custom Methods to Prototype
Array.prototype.sayHello = function () {
    console.log("Hello Array")
}

const arr = [1, 2]

arr.sayHello()

Output:

Hello Array

18. Why Prototype is Important

Prototype provides:

Inheritance
Method sharing
Memory efficiency
Reusability
Base of OOP in JavaScript

19. Prototype vs Class

JavaScript classes are internally based on prototypes.

Example:

class User {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log("Hello")
    }
}

Internally:

User.prototype.greet

20. Prototype Chain in Arrays
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null

21. Object.create()

Creates object with specified prototype.

const animal = {
    eats: true
}

const dog = Object.create(animal)

console.log(dog.eats)

Output:
true

22. Null Prototype
const obj = Object.create(null)

console.log(obj.__proto__)

Output:

undefined

Because it has no prototype.

23. Important Interview Questions
Q1. Does every object have prototype?
Yes.

Except objects created with:
Object.create(null)

Q2. Difference between inheritance in Java and JS?
Java → Class-based
JS → Prototype-based
Q3. Why use prototype?

To share methods among objects efficiently.

Q4. Is prototype inheritance dynamic?
Yes.

If prototype changes later, objects can access updated properties.

Example:
const animal = {}

const dog = Object.create(animal)

animal.sound = "Bark"
console.log(dog.sound)

Output:

Bark
24. Real Internal Relation
function User() {}
const u1 = new User()
Internal relation:
u1.__proto__ === User.prototype

Result:

true


25. | Concept         | Meaning                                  |
| --------------- | ---------------------------------------- |
| Prototype       | Object used for inheritance              |
| Prototype Chain | Chain of linked prototypes               |
| `prototype`     | Property of functions                    |
| `__proto__`     | Reference to object's prototype          |
| `new`           | Connects object to constructor prototype |
| Inheritance     | Accessing parent properties              |

*/


/*
Simple Example of prototype
function User(name) {
    this.name = name
}

User.prototype.sayHello = function () {
    console.log("Hello " + this.name)
}

const u1 = new User("Naeem")

u1.sayHello()

Output:
Hello Naeem

Explanation:

User.prototype stores shared methods.
u1 gets access to sayHello() through prototype inheritance.
Simple Example of __proto__
const obj = {
    name: "Naeem"
}

console.log(obj.__proto__)
Output:
Object.prototype

Explanation:

__proto__ points to the actual prototype of object.
obj is connected to Object.prototype.
Checking Relation Between Them
function User() {}

const u1 = new User()

console.log(u1.__proto__ === User.prototype)

Output:
true

Explanation:

u1.__proto__  →  User.prototype

Both point to the same object.
*/



