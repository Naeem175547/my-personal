// A function constructor is a normal function used to create
//  multiple objects using the new keyword.
// It acts like a blueprint for creating objects.


function Person(name,age){
    this.name=name;
    this.age=age;

}
let p1=new Person("adam",20)
let p2=new Person("eve",20)


/*
Constructor functions are used because they support prototypes
 and method sharing.

Example:
Factory function:

function factoryFun(name) {
    return {
        name,
        greet() {
            console.log("Hello")
        }
    }
}

Here every object gets a separate greet() function copy.

Constructor function:
function User(name) {
    this.name = name
}

User.prototype.greet = function () {
    console.log("Hello")
}
    // User.prototype.x = 10

Here all objects share one greet() method through prototype.
means this method will be add in prototype obj

So constructor functions save memory and support prototype inheritance better.
but it syntax is tricky so we use class 
*/


 /*
 Methods created using this inside constructor function are separate for every object.
example:

function User(name) {
    this.name = name

    this.greet = function () {
        console.log("Hello " + this.name)
    }
}

const u1 = new User("Naeem")
const u2 = new User("Ali")

console.log(u1.greet === u2.greet)
Output:
false

Explanation:

Each object gets its own separate copy of greet().

Internally:

u1
 ├── name
 ├── greet()   ← separate copy

u2
 ├── name
 ├── greet()   ← separate copy

So memory is wasted if many objects are created.

Better Approach Using Prototype:

function User(name) {
    this.name = name
}

User.prototype.greet = function () {
    console.log("Hello " + this.name)
}

const u1 = new User("Naeem")
const u2 = new User("Ali")

console.log(u1.greet === u2.greet)

Output:

true

Explanation:

Now both objects share same method through prototype.
 */