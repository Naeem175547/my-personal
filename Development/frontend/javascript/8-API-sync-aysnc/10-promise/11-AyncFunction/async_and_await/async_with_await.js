// async function text(){
//     console.log("A");
//    await  console.log("B"); // it will run till first statement after await (or it will wait for completing "after await statement"  )and then move back to function after completing all code remaing code will run
//     console.log("C");
// }
// console.log(text());
// console.log("D")
// console.log("E");



async function example() {
    console.log("Start");  
    await console.log("Inside await");  
    console.log("After await");  
    console.log("End");
  }
  
  console.log("Main Thread Task Before async function");
  example();
  console.log("Main Thread Task After async function");