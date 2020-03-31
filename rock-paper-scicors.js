// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//     if(choice1==choice2){
//         return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
//     }
//     if(choice1=="rock"){
//         if(choice2=="scissors"){
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
//         }
//         else{
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
//         }
//     }
//     if(choice1=="paper"){
//         if(choice2=="rock"){
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
//         }
//         else{
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
//         }
//     }
//     if(choice1=="scissors"){
//         if(choice2=="rock"){
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
//         }
//         else{
//             return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
//         }
//     }
// };
// alert(compare(userChoice,computerChoice));

//   10%3=1
//   9%3=0
//   8%3=2
//   7%3=1
//   6%3=0
//   5%3=2
//   4%3=1
//   3%3=0
//   2%3=2
//   1%3=1



//Define a hands array with values 'rock' paper and scissors

var hands=['rock','paper','scissors'];

var getHands= function() {
	
	return hands[parseInt((Math.random()*10)%3)];
}
var player1={
	name:"Gorkem",
	hand:getHands
}

var player2={
	name:"Computer",
	hand:getHands	
}

var winResults={
	rock:"scissors",
	paper:"rock",
	scissors:"paper"
}

function playRound(){
	
	let player1hand=player1.hand();
	let player2hand=player2.hand();

	console.log(player1.name, " threw ", player1hand);
    console.log(player2.name, " threw ", player2hand);

	if (player1hand==player2hand) {
		console.log('It is tie');
	}else if(winResults[player1hand]==player2hand){
		console.log(player1.name + " won ");
	}else{
		console.log(player2.name + " won ");
		return player2;
	}		
}

function playGame(player1,player2,playUntil){
	for (var i = 0; i < playUntil; i++) {
			
			var player1score=0;
			var player2score=0;	
			
			console.log('Round',i+1);
			let winner=playRound();
			if (winner==player1) {
				player1score++;
				console.log(player1.name + " won this round!");
			}else if (winner==player2) {
				player2score++;
				console.log(player2.name + " won this round!");
			}else{
				console.log("It is tie");
			}
	}
	console.log(player1.name + " score is " + player1score);
	console.log(player2.name + " score is " + player2score);
	
	if (player1score==player2score) {
		console.log("Players tied ! ");
		return null;
	}
	else if (player1score>player2score) {
		
		return player1.name + " won ! ";
	}
	else {
		
		return player2.name + " won ! "
	}	
}	

console.log(playGame(player1,player2,5));