let arr = [1,2,3,4,5];
let ans = arr.reduce(function(acc,element){
    return acc + element;
},0);
console.log(ans);

//spread operator
let Arr = [11,21,3,43,45];
let Arr2 = [...Arr];
console.log(Arr2);

//add using splice
let Arr3 = [11,21,3,43,45];
Arr3.splice(1,0,22);
console.log(Arr3);

//find the no. grater than 5
let Arr4 = [11,21,3,43,45];
let Arr5 = Arr4.filter(function(element){
    return element > 5;
});
console.log(Arr5);
