// 🔹 Web APIs (Browser features)
// 👉 Provided by browser environmen

// 🔹 DOM (Document Object Model)
// 👉 Used to interact with HTML document

//1
console.log("hi there?")
setTimeout(()=>{
    console.log("Apna College")
},4000)
console.log("welcome to")



// 2
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message);
  }
};
setTimeout(object.logMessage, 1000);
//output:undefined
//we are not calling fun we are passing fun reference
//so callback does not have this.



//3
// let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);
// You are passing the function reference, not calling it as a method
// Method lost its object context when passed as callback

//output:undefined