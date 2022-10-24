array = ["rock", "paper", "scissors"]

function getComputerChoice(input) {
    x = Math.floor(Math.random() * 3)
    return (input[x])
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(array)
    playerSelection = (prompt("enter"))
    
    if (computerSelection == playerSelection) 
    {result = "draw";}

    else if (computerSelection == "rock" && playerSelection == "paper")
    {result = "you win";}

    else if (computerSelection == "paper" && playerSelection == "scissors")
    {result = "you win";}

    else if (computerSelection == "scissors" && playerSelection == "rock")
    {result = "you win";}

    else if (playerSelection == "rock" && computerSelection == "paper")
    {result = "you lose";}

    else if (playerSelection == "paper" && computerSelection == "scissors")
    {result = "you loe";}

    else if (playerSelection == "scissors" && computerSelection == "rock")
    {result = "you lose";}

   
    return (result)

}

playRound()

