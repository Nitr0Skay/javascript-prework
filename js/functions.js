function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function showTheResult(computerMove, playerMove) {
    return `Komputer wylosował: ${computerMove};
    Gracz wylosował: ${playerMove};
    `;
}