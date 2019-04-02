// board - module

const Board = (() => {

    // let userInput = [];
    let count = 0;
    let moves = {player1: [], player2: []};

    const handleUserInput = () => {
        document.addEventListener('click', function (e) {
            let userInput = e.target.textContent;
            userInput = Number(userInput);
            if (e.target.matches('.box') && !isNaN(userInput)) {
                if (count % 2 === 0) {
                    moves.player1.push(userInput - 1);
                    e.target.textContent = 'X';
                } else {
                    moves.player2.push(userInput - 1);
                    e.target.textContent = 'O';
                }
                count++;
                hasUserInput();
            } else {
                alert('DRY');
            }
        })
    };

    const hasUserInput = () => {
        CheckResult.tie(moves);
        CheckResult.winner(moves);
        return moves;
    };

    const init = () => {
        const player1 = Player(prompt());
        const player2 = Player(prompt());
        handleUserInput();
    };
    return {handleUserInput, init, hasUserInput};
})();

// players - factory

const Player = (name) => {
    const playerName = () => name;
    return {playerName}
};

// game functionality - module

const CheckResult = (() => {
    const winningComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


    const winner = (moves) => {
            if (moves.player1.length > 2){
        for (let i = 0; i < winningComb.length; i++) {
                if (winningComb[i].indexOf(moves.player1)) {
                    alert('Winnnnnnnn')
                }
            }

        }
        console.log('We have a winner');
        return true;
    };

    const tie = (moves) => {
        console.log(moves);
        if (moves.player1.length + moves.player2.length === 9){
            alert('its tie');
        }
    }

    const gameOver = (a, b) => {
        return winner(a) || b === 9
    };

    return {gameOver, winner, tie};
})();

Board.init();
// Board.inputArray();