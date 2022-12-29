const play = document.getElementById('play');
const cells = document.getElementsByClassName('grid');
const winner = document.getElementById('winner');
winner.innerHTML ="";
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');


let textDisplay = "X"
for (let cell of cells) {
    cell.disabled = false;
    cell.addEventListener('click', () => {

        cell.disabled = true;
        cell.textContent = textDisplay;
        if (textDisplay === "X") {
            textDisplay = "O";
        } else {
            textDisplay = "X";
        }
        formula();
    });
}

let win = [
    [c1, c2, c3],
    [c4, c5, c6],
    [c7, c8, c9],
    [c1, c4, c7],
    [c2, c5, c8],
    [c3, c6, c9],
    [c1, c5, c9],
    [c3, c5, c7],
] 
const formula = () => {
let countX = 0;
let countY = 0;

for (let array of Object.values(win)) {
    for (let num of array) {
        if (num.textContent === "X") {
            countX++;
        } else if (num.textContent === "O") {
            countY++;
        }

if (countX === 3) {
    winner.append(document.createTextNode("GAMEOVER. Player One wins!"));
    disable();
    console.log({countX});
    break;
} else if (countY === 3) {
    winner.innerHTML = "GAMEOVER. Player Two wins!";
    disable();
    break;
}
    }
countX = 0;
countY = 0;
};
}
const disable = () => {
    for (let cell of cells){
    cell.disabled = true;
}
}
