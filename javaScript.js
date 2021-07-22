   //test change
   let choices = [`rock`, `paper`, `scissors`];  
   let compScore = 0;
    let playerScore = 0;

   function computerPlay() {               
       let selection = choices[Math.floor(Math.random() * choices.length)];
       return selection;
   }

   let playerAnswer = prompt(`Please enter one of the following: 'rock', paper' or 'scissors' `)


   function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return(`It's a draw`);
    } else if (
     (computerSelection == `rock` && playerSelection == `scissors`) ||
     (computerSelection == `scissors` && playerSelection == `paper`) ||
     (computerSelection == `paper` && playerSelection == `rock`)
     )
     {
         compScore++;
         return(`you lose!`);
     } else {
         playerScore++;
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
    
    function game() {    

    }

   let playerSelection = playerAnswer.toLowerCase(); 
   let computerSelection = computerPlay();
   console.log(playerSelection, computerSelection);
   alert(playRound(playerSelection, computerSelection));
   console.log(compScore, playerScore);
