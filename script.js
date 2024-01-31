//Gets Computer random prompt 

const rock = document.getElementById("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const elements = [{name: "rock"},{name:"paper"},{name:"scissors"}]

rock.addEventListener("click", function handleClick(){
    handleClick("ROCK")
});
paper.addEventListener("click", function handleClick(){
    handleClick("PAPER")
});

scissors.addEventListener("click", function handleClick(){
    handleClick("SCISSORS")
});

function handleClick(choice)
{
    return choice;
}

let playerSelection = choice;



function getComputerChoice()
{
   let computerSelection;
   let computerChoice = Math.floor(Math.random() * 3)
   if (computerChoice === 0)
   {
    computerSelection = "ROCK"
   }
   else if(computerChoice === 1)
   {
    computerSelection = "PAPER"
   }
   else if(computerChoice === 2)
   {
    computerSelection = "SCISSORS"
   }

   return computerSelection
}
//Gets Player input
// function getPlayerChoice()
// {
//     let playerSelection = prompt("Rock, Paper or Scissors?");
//     playerSelection = playerSelection.toUpperCase()
//    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")
//    {
//     return playerSelection
//    }
//    else
//    {
//     console.log("Please enter a valid choice between Rock, Paper and Scissors.")
//     return getPlayerChoice()
//    }
// }

function compare(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log("It's a tie, please try again!")
        return getPlayerChoice()
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER")
    {
        console.log("You lose!")
        return 0
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        console.log("You win!")
        return 1
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        console.log("You lose!")
        return 0
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        console.log("You win!")
        return 1
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        console.log("You lose!")
        return 0
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        console.log("You win!")
        return 1
    }
}
//Self explanatory play function
function play()
{
    let victoryCounter = 0
    for (a = 0 ; a<5 ; a++)
    {
     let computerChoice = getComputerChoice()
     let playerChoice =  getPlayerChoice()
     let result = compare(playerChoice, computerChoice)
    
     if (result === 1)
     {
        victoryCounter++
     }
    }
    if (victoryCounter > 2)
    {
        console.log("You won, with a score of ",victoryCounter, " wins.")

    }
    else
    {
        console.log("You lost, with a score of ",victoryCounter, "wins.")
    }
}