function getVal(val){
    if(val<25) return "low";
    if(val<50) return "medium";
    return "high";
}
console.log(getVal(25));