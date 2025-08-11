//ascending order
let arr = [43,67,23,62,32,43,23,11,1];
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);

//descending order
arr.sort(function(a,b){
    return b-a;
});
console.log(arr);

//for each
let me = [10,20,30,40,50];
me.forEach(function(element){
    console.log(element);
});

//map
let me2 = [10,20,30,40,50];
me2.map(function(element){
    console.log(element);
});

//filter
let me3 = [10,20,30,40,50];
me3.filter(function(element){
    console.log(element);
});

//reduce
let me4 = [10,20,30,40,50];
me4.reduce(function(element){
    console.log(element);
});

//find
let me5 = [10,20,30,40,50];
me5.find(function(element){
    console.log(element);
});

//find index
let me6 = [10,20,30,40,50];
me6.findIndex(function(element){
    console.log(element);
});

//some
let me7 = [10,20,30,40,50];
me7.some(function(element){
    console.log(element);
});

//every
let me8 = [10,20,30,40,50];
me8.every(function(element){
    console.log(element);
});

//fill
let me9 = [10,20,30,40,50];
me9.fill(0);
console.log(me9);

//copy within
let me10 = [10,20,30,40,50];
me10.copyWithin(0,2);
console.log(me10);

//entries
let me11 = [10,20,30,40,50];
me11.entries(function(element){
    console.log(element);
});

//keys
let me12 = [10,20,30,40,50];
me12.keys(function(element){
    console.log(element);
});

//values
let me13 = [10,20,30,40,50];
me13.values(function(element){
    console.log(element);
});

//includes
let me14 = [10,20,30,40,50];
me14.includes(20);
console.log(me14);

//join
let me15 = [10,20,30,40,50];
me15.join("-");
console.log(me15);

//reverse
let me16 = [10,20,30,40,50];
me16.reverse();
console.log(me16);
