function getComputerChoice(ComputerSelection) {

    if (ComputerSelection == 0)
        return ("rock");
    if (ComputerSelection == 1)
        return ("paper");
    if (ComputerSelection == 2)
        return ("scissors");

    console.log(ComputerSelection);
}

function playerChoice(playerSelection) {

    if (playerSelection == 1)
        return ("rock");
    if (playerSelection == 2)
        return ("paper");
    if (playerSelection == 3)
        return ("scissors")

    console.log(playerSelection)
}

function theGame(ComputerSelection, playerSelection) {
    
}


playerChoice(parseInt(prompt("Enter 1 for Rock, 2 for paper, 3 for scissors")));
getComputerChoice(Math.floor(Math.random() * 3));