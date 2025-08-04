//rock paper scissor logic
function rps(player1, player2){
    if(player1 === player2){
        return "draw";
    }
    if(player1 === "rock" && player2 === "scissor"){
        return "player1";
    }
    if(player1 === "paper" && player2 === "rock"){
        return "player1";
    }
    if(player1 === "scissor" && player2 === "paper"){
        return "player1";
    }
    return "player2";
}
console.log(rps("rock", "scissor"));

//or
function Rps (player1 , player2){
   if(player1 === player2)return "draw";
   if(player1 === "rock" && player2 === "scissor")return "player1";
   if(player1 === "paper" && player2 === "rock")return "player1";
   if(player1 === "scissor" && player2 === "paper")return "player1";
   return "player2";
}
console.log(Rps("rock", "scissor"));
