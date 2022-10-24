function g1etComputerChoice(x) {

    if (x == 0)
        return ("rock");
    else if (x == 1)
        return ("paper");
    else if (x == 2)
        return ("scissors");
    
}

function playRound1() {
   let ComputerSelection = getComputerChoice(Math.floor(Math.random() * 3));
   let playerSelection = (prompt("Enter rock, paper or scissors"));

    if (ComputerSelection == playerSelection)
        return ("Draw");
    else if (ComputerSelection == "rock") 
        if (playerSelection == "paper")
            return ("You Win");
    else if (ComputerSelection == "paper")
        if (playerSelection == "scissors")
            return ("You Win");
    else if (ComputerSelection == "scissors")
        if (playerSelection == "rock")
            return ("You Win");
    else if (ComputerSelection == "scissors") 
        if (playerSelection == "paper")
            return ("You Lose");
    else if (ComputerSelection == "paper")
        if (playerSelection == "rock")
            return ("You Lose");
    else (ComputerSelection == "rock")
        if (playerSelection == "scissors")
            return ("You Lose");

}

function playGame1(x, y) {
    for (let i = 0; i < 5; i++) {
        if (playRound() = "You Win")
            x = x++;
        if (playRound() = "You Lose")
            y = y++;
    }

    if (x > y)
        return("You Won the game!")
    else
        return("You Lost the game :(")
}

playGame()
