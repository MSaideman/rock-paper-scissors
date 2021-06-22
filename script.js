var playerWinCtr = 0, compWinCtr = 0, tieCtr = 0;
var userStart = confirm("Do you want to play rock, paper, scissors?");
var message1 = "The result is a tie!"
var message2 = "paper wins"
var message3 = "scissors wins"
var message4 = "rock wins"

function playGame() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    if (userChoice === computerChoice) {
        tieCtr++
        return message1;
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            playerWinCtr++
            return message4;
        } else {
            compWinCtr++
            return message2;
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            playerWinCtr++
            return message2;
        } else {
            if (computerChoice === "scissors") {
                compWinCtr++
                return message4;
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                playerWinCtr++
                return message4;
            } else {
                if (computerChoice === "paper") {
                    compWinCtr++
                    return message3;
                }
            }
        }
    }
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log(compare(userChoice, computerChoice));
}

alert(playGame());
while (prompt("Do you want to play again, Y or N?") == "Y") {
    alert(playGame());
}