function abcd(){
    return "hello";
}
let value = abcd();     
console.log(value);

//pure function
function sum(){
    console.log("sum");
}
sum();

//impure function
let a = 10;
function sum(a,b){
    a++
}
sum(a);
console.log(a);

//closuure
function  abcd(){
    let a = 10;
    return function(){
        console.log(a);
    }
}  
let val = abcd();
val();

//lexical scope
function abcd(){
    let a = 13;
    function defg(){
        let b = 12;
        function hijk(){
            let c = 11;
        }
    }
}

//iife
(function(){
    console.log("iife");
})();   