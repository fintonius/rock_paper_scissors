//so, have got the basic structure working well I think.
//Now it's time to get the first to 5 wins structure in. 
//This means keeping score, have the games increment rather than
//be one-off as they still seem to be an bring in the 'first to 5' win condition.

//to start with the score needs to be fed into an element, not just displayed with
//console.log(). So I better get them written in html :)
let choices = [`rock`, `paper`, `scissors`];  
let compScore = 0;
let playerScore = 0;
let gamesPlayed = 0;
let computerSelection;
let playerSelection;

function myFunction() {  
    gamesPlayed++;  
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (compScore == 5) {
        alert(`game over man! Click 'OK' to play again`);
        location.reload();
    } 
    else if (playerScore == 5) {
        alert(`You win!!! Click 'OK' to play again`);
        location.reload();
    } 
    else (game(playerSelection, computerSelection));
    document.getElementById("cAnswer").innerHTML = computerSelection;
    document.getElementById("gameCounter").innerHTML = gamesPlayed;
  }


function game(playerSelection, computerSelection) {

  console.log(gamesPlayed, playerScore, compScore);
  playerSelection = document.getElementById("input").value;
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`) {
      alert(`Incorrect answer, please enter 'rock' 'paper' or 'scissors' in the 'Input' box.`);
  }  else if (playerSelection === computerSelection) {   
        return(`It's a draw`);
    } else if (
     (computerSelection == `rock` && playerSelection == `scissors`) ||
     (computerSelection == `scissors` && playerSelection == `paper`) ||
     (computerSelection == `paper` && playerSelection == `rock`)
     )
     {
        compScore++;
        document.getElementById("cScore").innerHTML = compScore;

         return(`you lose!`);
     } else {
        playerScore++;
        document.getElementById("pScore").innerHTML = playerScore ;

         alert(`you win!`);
     }  
                    
 } 

 function restart() {
    location.reload();
 }
    //stage 1 complete! now need to make a 5 round game :(
    //can use a 'for loop' I think. Pseudo-code first though! 
    //round 1 prompts player to enter answer. Compares against compter answer to determine winner
    //add 1 to player or computer total in event of winner, doesn't add anything in event of draw
    //repeat above until player or computer total == 5
    //SO: 
    // function computerTotal() {if computer won add 1 to total until total == 5 (or is it 4? starts count at 0?)}
    // function playerTotal() {if player won add 1 to total until total == 5 (or is it 4? starts count at 0?)}
    // function game() {call function (playRound) and loop until either computerTotal or playerTotal == 5/4}

    //have a variable for the comp & player scores to store the increments in?