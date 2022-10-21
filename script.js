function getComputerChoice(ComputerSelection) {

    if (ComputerSelection == 0)
        return ("rock")
    if (ComputerSelection == 1)
        return ("paper")
    if (ComputerSelection == 2)
        return ("scissors")

    console.log(ComputerSelection)
}

getComputerChoice(Math.floor(Math.random() * 3));