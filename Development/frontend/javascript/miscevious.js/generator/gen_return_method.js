// return terninate generater and set done true and also retrun a object with that we passed inside this return fuc value like next
function *gen(){

    yield "PHP";
    yield "Node";
    yield "Angular";
    yield "React";
}
let a=gen();
console.log(a.next().value);
console.log(a.return("terminateing generatro"));
console.log(a.next());
