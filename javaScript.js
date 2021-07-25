
let choices = [`rock`, `paper`, `scissors`];  
let compScore = 0;
let playerScore = 0;
let gamesPlayed = 0;
let computerSelection = computerPlay();
let playerSelection;

function myFunction() {    
    console.log(game(playerSelection, computerSelection));
  }


   function computerPlay() {               
       let selection = choices[Math.floor(Math.random() * choices.length)];
       return selection;
   }


   function game(playerSelection, computerSelection) {

  playerSelection = document.getElementById("input").value;
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`) {
      alert(`Incorrect answer, please enter 'rock' 'paper' or 'scissors' in the 'Input' box.`);
  }  
    if (playerSelection === computerSelection) {
        gamesPlayed++;
        console.log(playerSelection, computerSelection);
    console.log(playerScore, compScore);
        return(`It's a draw`);
    } else if (
     (computerSelection == `rock` && playerSelection == `scissors`) ||
     (computerSelection == `scissors` && playerSelection == `paper`) ||
     (computerSelection == `paper` && playerSelection == `rock`)
     )
     {
         compScore++;
         gamesPlayed++;
         console.log(playerSelection, computerSelection);
    console.log(playerScore, compScore);
         return(`you lose!`);
     } else {
         playerScore++;
         gamesPlayed++;
         console.log(playerSelection, computerSelection);
    console.log(playerScore, compScore);
         return(`you win!`);
     }  
                    
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