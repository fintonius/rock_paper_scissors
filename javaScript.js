   //test change
   let choices = [`rock`, `paper`, `scissors`];  

   function computerPlay() {               
       let selection = choices[Math.floor(Math.random() * choices.length)];
       return selection;
   }

   let playerAnswer = prompt(`Please enter one of the following: 'rock', paper' or 'scissors' `)
   //Need to put something in if user does not enter a valid choice. Had thought of following
   //but it doesn't work properly:
   //if (answer.length != choices.length) {
   //    prompt(`Incorrect selection. Please enter 'rock', paper' or 'scissors'`);
   //}

   function playRound(playerSelection, computerSelection) {
       //I need to tell the computer that `rock` beats `scissors`, etc.
       //so it can then compare the strings from playerSelection and computerSelection
       //and determine who has won. The most obvious way is 'if else' but it seems
       //very clunky and long winded
       //the below works! It's mostly just that I'm pleased I got something to work :)
       if (playerSelection == computerSelection) {
           return(`It's a draw`);
       } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
        )
        {
            return(`you lose`);
        } else {
            return(`you win!`);
        }
       
    }

   let playerSelection = playerAnswer.toLowerCase(); 
   let computerSelection = computerPlay();
   console.log(playerSelection, computerSelection);
   alert(playRound(playerSelection, computerSelection));
