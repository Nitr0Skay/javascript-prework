let computerMove = `kamień`;
let playerMove = `papier`;
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

switch(playerInput) {
    case 1: {
        playerMove = `kamień`;
        break;
    }
    case 2: {
        playerMove = `papier`;
        break;
    }
    case 3: {
        playerMove = `nożyce`;
        break;
    }
    default: {
        playerMove = `Nieznany Ruch`;
        break;
    }
}

switch(randomNumber) {
    case 1: {
        computerMove = `kamień`;
        break;
    }
    case 2: {
        computerMove = `papier`;
        break;
    }
    case 3: {
        computerMove = `nożyce`;
        break;
    }
    default: {
        computerMove = `Nieznany Ruch`;
        break;
    }
}