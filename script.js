var playerWinCtr = 0, compWinCtr = 0, tieCtr = 0;
var userStart = confirm("Do you want to play rock, paper, scissors?");
var message1 = "The result is a tie!"
var message2 = "paper wins"
var message3 = "scissors wins"
var message4 = "rock wins"
var options = ["rock", "paper", "scissors"];

var playGame = function() {
    var userChoice = window.prompt("Do you choose rock, paper or scissors?");

    if (!userChoice) {
        return;
    }
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
  
    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        tieCtr++
        window.alert(message1);
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            playerWinCtr++
            window.alert(message4);
        } else {
            compWinCtr++
            window.alert(message2);
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            playerWinCtr++
            window.alert(message2);
        } else {
            if (computerChoice === "scissors") {
                compWinCtr++
                window.alert(message4);
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                playerWinCtr++
                window.alert(message4);
            } else {
                if (computerChoice === "paper") {
                    compWinCtr++
                    window.alert(message4);
                }
            }
        }
    }
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);

    window.alert(
        "Stats:\nWins: " + playerWinCtr + "\nLosses: " + compWinCtr + "\nTies: " + tieCtr
      );
    
      // Ask user to play again
      var playAgain = window.confirm("Do you want to play again?");
    
      // If user pressed OK, run the function again
      if (playAgain) {
        playGame();
      }
    
}

alert(playGame());
while (prompt("Do you want to play again, Y or N?") == "Y") {
    alert(playGame());
}