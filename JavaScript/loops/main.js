//for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

//while loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do{
    console.log(j);
    j++;
}while(j < 10);

//for of loop
let arr = [1,2,3,4,5];
for(let i of arr){
    console.log(i);
}

//for in loop
let obj = {name: "John", age: 30, city: "New York"};
for(let i in obj){
    console.log(i);
}

//break and continue
for(let i = 0; i < 10; i++){
    if(i === 5) break;
    console.log(i);
}
for(let i = 0; i < 10; i++){
    if(i === 5) continue;
    console.log(i);
}

//print 10 to 1
let o = 10;
while(o >= 1){
    console.log(o);
    o--;
} 

//print even numbers
for(let i = 0; i < 10; i++){
    if(i % 2 === 0) console.log(i);
}