function getComputerChoice(ComputerSelection) {

    if (ComputerSelection == 0)
        return ("rock");
    if (ComputerSelection == 1)
        return ("paper");
    if (ComputerSelection == 2)
        return ("scissors");

}

function playRound(playerSelection, ComputerSelection) {
    ComputerSelection = getComputerChoice(Math.floor(Math.random() * 3));
    playerSelection = (prompt("Enter rock, paper or scissors"));

    if (ComputerSelection == playerSelection)
        return ("Draw")
    else if (ComputerSelection == "rock") 
        if (playerSelection == "paper")
            return ("You Win")
    else if (ComputerSelection == "paper")
        if (playerSelection == "scissors")
            return ("You Win")
    else if (ComputerSelection == "scissors")
        if (playerSelection == "rock")
            return ("You Win")
    else if (ComputerSelection == "scissors") 
        if (playerSelection == "paper")
            return ("You Lose")
    else if (ComputerSelection == "paper")
        if (playerSelection == "rock")
            return ("You Lose")
    else if (ComputerSelection == "rock")
        if (playerSelection == "scissors")
            return ("You Lose")

}

playRound()

