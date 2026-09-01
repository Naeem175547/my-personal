// ======================
// JAVASCRIPT "this" CHEAT SHEET
// ======================


// 1. GLOBAL CONTEXT
console.log(this);
// Browser → window
// Node → {} or global


// 2. NORMAL FUNCTION
function show() {
  console.log(this);
}
show();
//or not strict->window.show() ro show()
// non-strict → window
// strict → undefined


// 3. OBJECT METHOD
const obj1 = {
  name: "Naeem",
  type:this,//window object
  show() {
    console.log(this.name);
  }
};
obj1.show(); // Naeem //if not this then error
//obj also have window scope
//when we call any fun with obj then that fun has that obj this



// 4. ARROW FUNCTION (NO OWN this)
const obj2 = {
  name: "Naeem",
  show: () => {
    console.log(this.name);
  }
};
obj2.show(); // undefined


// 5. NESTED FUNCTION PROBLEM
const obj3 = {
  name: "JS",
  show() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj3.show(); // undefined

// 🔥 Core Rule
// 👉 In JavaScript, this is decided at call time (call-site)
// 👉 If a function is called without an object, it defaults to global
//  object (window) (in non-strict mode)
//for for all fun expression except arrow fun


// FIX USING ARROW FUNCTION
const obj4 = {
  name: "JS",
  show() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
obj4.show(); // JS

// 👉 Arrow functions do NOT have their own this.
// 👉 They borrow this from their surrounding (parent) scope.


// 6. CONSTRUCTOR FUNCTION
function Person(name) {
  this.name = name;
}
const p1 = new Person("Naeem");
console.log(p1.name); // Naeem


// 7. CLASS
class Person2 {
  constructor(name) {
    this.name = name;
  }
}
const p2 = new Person2("Ali");
console.log(p2.name);


// 8. call, apply, bind
function greet() {
  console.log(this.name);
}
const user = { name: "Naeem" };

greet.call(user);   // Naeem
greet.apply(user);  // Naeem

const fn = greet.bind(user);
fn();               // Naeem


// 9. EVENT LISTENER
button.addEventListener("click", function () {
  console.log(this); // button
});

button.addEventListener("click", () => {
  console.log(this); // window
});


// 10. setTimeout ISSUE
const obj5 = {
  name: "JS",
  show() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
obj5.show(); // undefined


// FIX
const obj6 = {
  name: "JS",
  show() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
obj6.show(); // JS


// ======================
// SUMMARY RULES
// ======================

// global → window
// function → window / undefined
// method → object
// arrow → parent scope
// constructor → new object
// call/apply/bind → manual control