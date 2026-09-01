function f1(){
    console.trace("function order of running");
    console.log("f1 is running");
    f2();
}
let f2=function(){
    console.log("f2 is running");
    f3();
}
var x;
let f3=function f(){
    console.log("f3 is running"); 
    f4();
}
let f4=()=>{
    console.log("f4 is running");
}
(function(){
    console.log("iffe is running");
})();

(function abc(){
    console.log("iffe2 is running");
})();


f1();