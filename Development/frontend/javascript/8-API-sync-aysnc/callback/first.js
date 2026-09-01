let x = 10;
console.log("imran khan")
// synchronous

for(let i = 0; i < 1000000000; i++) {
    if(i % 10000) {
        x++;
    }
}
console.log("end")
// asynchronous
setTimeout(()=>{
    console.log("imran khan1");
},10000)
setTimeout(()=>{
    console.log("imran khan2");
},3000)
setTimeout(()=>{
    console.log("imran khan3");
},0)

console.log(x);
for(let i = 0; i < 1000000000; i++) {
    if(i % 10000) {
        x++;
    }
}
for(let i = 0; i < 1000000000; i++) {
    if(i % 10000) {
        x++;
    }
}
console.log("loop end");
setTimeout(()=>{
    console.log("imran khan 4");
},0)
setTimeout(()=>{
    console.log("imran khan 5");
},2000)
setTimeout(()=>{
    console.log("imran khan6");
},0)
console.log(Number(true))