// board - module

const Board = (() => {

    let inputArr = [];
    const handleUserInput = () => {
        let slotsList = document.querySelectorAll('.box');
        // let slots = Array.from(slotsList);
        // slotsList.forEach( (slot, i) =>  {
        //     slot.addEventListener('click',  () => {
        //         hello(i);
        //         slotsList[i].textContent = sign;
        //         inputArr.push(i);
        //         inputArray();
        //         console.log(inputArr);
        //     })
        // })
        console.log(slotsList.length);
        for (let i = 0; i < slotsList.length; i++){
            let slot = slotsList[i];
            console.log(i)
            slot.addEventListener('click', function () {
                slotsList[i].textContent = 'X';
                inputArr.push(i);
                console.log('slot');
            })
            // return inputArr;
        }

    }

    const inputArray = () => {
        return inputArr;
    }
    const isWiningMove = () => {
        const inputArray =  inputArray();
        //just testing
        // Basically the algorithm for
        if (inputArray.length > 3){
            return true;
        }
        return  false;
    }

    const init = () => {
        const player1 = Player(prompt(), 'X');
        const player2 = Player(prompt(), 'O');
        handleUserInput()
    }

    return {handleUserInput, init, inputArray};
})();

// players - factory

const Player = (name, sign) => {
    const playerName = () => name;
    const playerSign = () => sign;

    const start = (p1) => {

    }

    return {playerName, playerSign, start}
}

// console.log(player1.playerSign());
// start / restart

// game functionality - module

// const CheckResult = function(){
//     const winningComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
//                         [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//
//
//     const winner = (a) => {
//         for(let i = 0;i < winningComb.length;i++){
//             if(winningComb[i] !== a[i]){
//                 return false;
//             }
//         }
//         console.log('We have a winner');
//         return true;
//     }
//     const checkSigns = (x,y) => {
//         return x.sign !== y.sign;
//     }
//     const bothPlayers = (a,b) => {
//         return checkSigns(a,b)
//     };
//     const legalMove = (a,b) => {
//         return a.indexOf(b) === -1;
//     }
//     const gameOver = (a,b) => {
//         return winner(a) || b === 9
//     }
//
//     return {
//         bothPlayers, legalMove, gameOver,winner
//     }
// };

//

Board.init()
Board.inputArray();