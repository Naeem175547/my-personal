// "use strict"
var teacher = "Sanket Singh";


function fun() {
    var teacher = "Anurag";
    content="imran khan" //no formal declaration so no scope resolution(attached to window but after fun call)
    console.log("hello", teacher);
    
}

function gun() {
    var student = "Karthik";
    console.log("Welcome to the class", student,teacher);
}

// console.log(content)//error
fun();
gun();
console.log(content)