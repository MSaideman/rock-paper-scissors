var playerWinCtr = 0, compWinCtr = 0, tieCtr = 0;
var userStart = confirm("Do you want to play rock, paper, scissors?");
var message1 = "The result is a tie!"
var message2 = "paper wins"
var message3 = "scissors wins"
var message4 = "rock wins"
var playAgain = "Y"

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
var compare = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        tieCtr++
        window.alert(message1)
        return message1 + " " + tieCtr;
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            playerWinCtr++
            window.alert(message4)
            return message4 + " " + playerWinCtr;
        } else {
            compWinCtr++
            window.alert(message2)
            return message2 + " " + compWinCtr;
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            playerWinCtr++
            window.alert(message2)
            return message2 + " " + playerWinCtr;
        } else {
            if (computerChoice === "scissors") {
                compWinCtr++
                window.alert(message4)
                return message4 + " " + compWinCtr;
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                playerWinCtr++
                window.alert(message4)
                return message4 + " " + playerWinCtr;
            } else {
                if (computerChoice === "paper") {
                    compWinCtr++
                    window.alert(message3)
                    return message3 + " " + compWinCtr;
                }
            }
        }
    }
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(compare(userChoice, computerChoice));

playagain = prompt("Do you want to play again? Y or N")
userChoice = prompt("Do you choose rock, paper or scissors?");