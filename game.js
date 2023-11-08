
let player1 = document.querySelector('.player1-js');
const player2 = document.querySelector('.player2-js');
const buttons = document.querySelectorAll('.class-js');

document.querySelector('.button-restart').addEventListener('click', () => {
    clear();
})

document.querySelector('.button-score').addEventListener('click', () => {
    resetscore();
})


let currentPlayer = 'X';
let nextPlayer = 'O';
let playerMove = currentPlayer;

let x_win = 0;
let O_win = 0;
let tie = 0;


play();



function clear() {
    buttons.forEach(btn1 => {
        btn1.innerHTML = '';
    });
    document.querySelector('.result-js').innerHTML = '';
    // playerMove = currentPlayer;
}


function play() {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(e.target.textContent === ''){
                e.target.textContent = playerMove;
                if (winCheck()) {
                    result();
                    score();
                }
                
                // console.log(playerMove);
                startGame();   
            }

        })
    });
}


function startGame(){
    playerMove === nextPlayer ? playerMove=currentPlayer : playerMove =nextPlayer ;
}

function result() {
    const value = document.querySelector('.result-js');
    value.classList.add('result-js-style');
    value.innerHTML = `Player <span>${playerMove}</span> Win The match`;
}

function score() {
    playerMove === 'X' ? x_win++ : O_win++ ;
    document.querySelector('.player1-js').innerHTML = `Score X : ${x_win}`;
    document.querySelector('.player2-js').innerHTML = `Score O : ${O_win}`;
}

function resetscore() {
    document.querySelector('.player1-js').innerHTML = '';
    document.querySelector('.player2-js').innerHTML = '';
}


function winCheck() {
    const winList = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let index = 0; index < winList.length; index++) {
        const [pos1 ,pos2 ,pos3] = winList[index];

        if(buttons[pos1].textContent !=='' && buttons[pos1].textContent === buttons[pos2].textContent && buttons[pos2].textContent === buttons[pos3].textContent){
            console.log(buttons[pos1],buttons[pos2],buttons[pos3]);
            return true;
            
        }   

    }
    return false;
}




