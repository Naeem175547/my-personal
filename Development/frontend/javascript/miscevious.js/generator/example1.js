


function* gen() {
    console.log("Start");
    yield 10;

    console.log("middle");

    const x = 10 + (yield 30);

    console.log(x);

    yield x;
}

const v = gen();
console.log(v.next());
console.log(v.next());
console.log(v.next(99));// Calling .next(value) sends value as the result of the last yield expression(so yeild 30 will replace 99)
console.log(v.next())