let u1 = Symbol("user");
let u2 = Symbol("user");
console.log(u1 === u2);

//max safe integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//max safe integer * n
let a = 9007199254740991n;
console.log(a + 1n);

let d = "5" + 5;
console.log(d);

//but
let e = "12"-5;
console.log(e);
let f = 12-5;
console.log(f);
