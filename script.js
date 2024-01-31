const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const resultText = document.getElementById("resultText")
const elements = [{name: "rock"},{name:"paper"},{name:"scissors"}]
let playerSelection;

rock.addEventListener("click", function handleRockClick(){
    playerSelection= handleClick("ROCK")
    const computerSelection = getComputerChoice()
    const result = compare(playerSelection, computerSelection);
    handleResult(result);
});
paper.addEventListener("click", function handlePaperClick(){
    playerSelection= handleClick("PAPER")
    const computerSelection = getComputerChoice()
    const result = compare(playerSelection, computerSelection);
    handleResult(result);
});

scissors.addEventListener("click", function handleScissorsClick(){
    playerSelection= handleClick("SCISSORS")
    const computerSelection = getComputerChoice()
    const result = compare(playerSelection, computerSelection);
    handleResult(result);
});

function handleClick(choice)
{
    return choice;
}

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

function compare(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log("It's a tie, please try again!")
        return 2
        
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
function handleResult(result)
{
     if (result === 1)
     {
        resultText.innerText = "You win!"
     }
     else if (result === 2){
        resultText.innerText = "It's a tie!"
     }
     else{
        resultText.innerText = "You lose!"
     }
}