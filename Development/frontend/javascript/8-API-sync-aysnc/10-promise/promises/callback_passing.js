function f1(x,cb){
    console.log(x);
    cb();
}
function f2(y,cb2){
    console.log(y);
    cb2();
}
f2(9,()=>{
    f1(10,()=>{
        console.log("inside most callback fo f1");
    })
})
