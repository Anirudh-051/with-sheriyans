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