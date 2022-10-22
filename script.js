function getComputerChoice(ComputerSelection) {

    ComputerSelection = (Math.floor(Math.random() * 3));

    if (ComputerSelection == 0)
        return ("rock");
    if (ComputerSelection == 1)
        return ("paper");
    if (ComputerSelection == 2)
        return ("scissors");

    console.log(ComputerSelection);
}

function playerChoice(playerSelection) {

    if (playerSelection == 0)
        return ("rock");
    if (playerSelection == 1)
        return ("paper");
    if (playerSelection == 2)
        return ("scissors")

    console.log(playerSelection)
}

function theGame(ComputerSelection, playerSelection) {
    
}

playerChoice(parseInt(prompt("Enter 0 for Rock, 1 for paper, 2 for scissors")));
getComputerChoice(Math.floor(Math.random() * 3));
const ComputerSelection = getComputerChoice();
const playerSelection = playerChoice(parseInt(prompt("Enter 0 for Rock, 1 for paper, 2 for scissors")));


