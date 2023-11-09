
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






function play() {
    buttons.forEach(btn => {
        btn.addEventListener('click',handleFunction);
    });
}

const handleFunction = (e) => {
    if(e.target.textContent === ''){
        e.target.textContent = playerMove;
        if (winCheck()) {
            playerMove === 'X' ? x_win++ : O_win++ ;
            result();
            disable();
            score();
        }
        else if(tieCheck()) {
            tie++;
            document.querySelector('.result-js').innerHTML = `Its a Tie Match`;
            score();
        }
        // console.log(playerMove);
        startGame();   
    }
}

play();

const disable = () => {
    buttons.forEach(dis => {
        dis.removeEventListener('click', handleFunction);
    })
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
    

    document.querySelector('.player1-js').innerHTML = `Score X : ${x_win}`;

    document.querySelector('.player2-js').innerHTML = `Score O : ${O_win}`;

    document.querySelector('.player3-js').innerHTML = `Tie : ${tie}`;
    
}

function resetscore() {
    document.querySelector('.player1-js').innerHTML = `Score X : ${x_win=0}`;
    document.querySelector('.player2-js').innerHTML = `Score O : ${O_win=0}`;
    document.querySelector('.player3-js').innerHTML = `Tie : ${tie=0}`;

    // noditem.classList.remove('hilight-nodes');
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
        let [pos1 ,pos2 ,pos3] = winList[index];

        if(buttons[pos1].textContent !=='' && buttons[pos1].textContent === buttons[pos2].textContent && buttons[pos2].textContent === buttons[pos3].textContent){
            let nodes = [buttons[pos1],buttons[pos2],buttons[pos3]];
            nodes.forEach(noditem => {
                noditem.classList.add('hilight-nodes');
            })
            return true;
            
        }   

    }
    return false;
}

function tieCheck() {
    let tieCount = 0;
    buttons.forEach(col => {
        if (col.innerHTML === '') {
            tieCount++;
        }
    })

    return tieCount===0 && !winCheck();
}


function clear() {
    buttons.forEach(btn1 => {
        btn1.innerHTML = '';
        btn1.classList.remove('hilight-nodes');
    });
    document.querySelector('.result-js').innerHTML = '';


}



