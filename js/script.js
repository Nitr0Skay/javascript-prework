let computerMove = `kamień`;
let playerMove = `papier`;
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = Number(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));
const messageBox = document.getElementById('messages');

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

if(computerMove === playerMove) {
    messageBox.innerHTML = `Jest remis, obaj wylosowaliście ${computerMove}`;  //Lepiej pokazać wylosowany ruch gracza, czy komputera ??
} else if(computerMove === `kamień` && playerMove === `papier`) {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa gracz!`;
} else if(computerMove === `papier` && playerMove === 'kamień') {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa komputer!`;
} else if(computerMove === `kamień` && playerMove === `nożyce`) {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa komputer!`;
} else if(computerMove === `nożyce` && playerMove === `kamień`) {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa gracz!`;
} else if(computerMove === `nożyce` && playerMove === `papier`) {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa komputer!`;
} else if(computerMove === `papier` && playerMove === `nożyce`) {
    messageBox.innerHTML = showTheResult(computerMove, playerMove);
    messageBox.innerHTML += `Wygrywa gracz!`;
} else {
    messageBox.innerHTML = `Tajemnicze ruchy, nie wiadomo kto wygrał...`;
}