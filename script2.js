array = ["rock", "paper", "scissors"]

function getComputerChoice(input) {
    x = Math.floor(Math.random() * 3)
    return (input[x])
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(array)
    let z = (prompt("Enter rock, paper or scissors"))
    playerSelection = z.toLowerCase()
    
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
    {result = "you lose";}

    else if (playerSelection == "scissors" && computerSelection == "rock")
    {result = "you lose";}

   
    console.log(result)

}

function game() {
    for (var i = 1; i < 6; i++) 
    playRound()
}

game()
