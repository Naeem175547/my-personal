function *gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let x= gen()//return obj only goes inside if next called and as yeild found return back from gen
while(true){
    let next=x.next()
    if(next.done==true){
        console.log("completed")
        break
    }
    console.log(next)
    console.log(next.value)
}