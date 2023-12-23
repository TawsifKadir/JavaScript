let gameNum = 25;
let userNum = prompt("Please enter a number");

while(userNum != gameNum){
    userNum = prompt("Wrong! Please enter another number");
}

console.log("Congratulations! You have won the game");