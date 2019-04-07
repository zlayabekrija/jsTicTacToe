
let firstPlayerScore = document.getElementById('fplayer')
let secondPlayerScore = document.getElementById('splayer');

// board - module
const Board = (() => {

    // let userInput = [];
    let firstPlayer = '';
    let secondPlayer = '';
    let playOn = true;
    let count = 0;
    let moves = {
        player1: [],
        player2: []
    };

    const handleUserInput = () => {
        document.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
            let userInput = e.target.textContent;
            userInput = Number(userInput);
            if (e.target.matches('.box') && !isNaN(userInput) && playOn) {
                if (count % 2 === 0) {
                    moves.player1.push(userInput - 1);
                    e.target.textContent = 'X';
                } else {
                    moves.player2.push(userInput - 1);
                    e.target.textContent = 'O';
                }
                count++;
                hasUserInput(firstPlayer, secondPlayer);
            } else if (e.target.matches('.box') && playOn) {
                alert('DRY');
            }
        })
    };

    const hasUserInput = (a, b) => {
        if (CheckResult.gameOver(moves, a, b)) {
            winCount(CheckResult.count);
            playOn = false;
            restartDisplay();
            innerRestart();
            return;
        }
    };
    const innerRestart = () => {
        playOn = true;
        moves = {player1: [], player2: []};
        count = 0;

    };


    const init = () => {
        const player1 = Player(prompt()) || 'Player X';
        const player2 = Player(prompt()) || 'Player O';
        firstPlayer = player1.playerName();
        secondPlayer = player2.playerName();
        CheckResult.count.player1 = 0;
        CheckResult.count.player2 = 0;
        winCount(CheckResult.count);
        renderNames(firstPlayer, secondPlayer);
        handleUserInput();
    };
    return {
        handleUserInput,
        init,
        hasUserInput
    };
})();

// players - factory

const Player = (name) => {
    const playerName = () => name;
    return {
        playerName
    }
};

// game functionality - module

const CheckResult = (() => {
    const winningComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let count = {player1: 0, player2: 0};

    const winner = (moves, firstPlayer, secondPlayer) => {
        if (moves.player1.length > 2) {
            for (let i = 0; i < winningComb.length; i++) {
                if (moves.player1.indexOf(winningComb[i][0]) !== -1 && moves.player1.indexOf(winningComb[i][1]) !== -1
                    && moves.player1.indexOf(winningComb[i][2]) !== -1) {
                    alert((firstPlayer || 'Player X').concat(" wins"));
                    count.player1++;
                    return true
                }
                if (moves.player2.indexOf(winningComb[i][0]) !== -1 && moves.player2.indexOf(winningComb[i][1]) !== -1
                    && moves.player2.indexOf(winningComb[i][2]) !== -1) {
                    alert((secondPlayer || 'Player O').concat(" wins"));
                    count.player2++;
                    return true;
                }

            }

        }
        return false;
    };

    const tie = (moves) => {
        let num = 0;
        for (let count in moves) {
            num += moves[count].length;
        }
        return num === 9;
    };

    const gameOver = (moves, firstPlayer, secondPlayer) => {
        return winner(moves, firstPlayer, secondPlayer) || tie(moves)
    };

    return {
        gameOver,
        winner,
        tie,
        count
    };
})();

let start = document.querySelector('.start');
start.addEventListener('click', () => {
    restartDisplay();
    setTimeout(() => {
        Board.init();
    }, 0);
});

function restartDisplay() {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = (i + 1).toString();
    }
}

function renderNames(firstPlayer, secondPlayer) {
    document.querySelector('.firstplayer').innerText = firstPlayer || 'Player X';
    document.querySelector('.secondplayer').innerText = secondPlayer || 'Player O';
}

const winCount = (totalScore) => {
    firstPlayerScore.textContent = totalScore.player1;
    secondPlayerScore.textContent = totalScore.player2;
};