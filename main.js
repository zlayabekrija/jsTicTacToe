// board - module

const Board = (position, sign) => {
    const any = () => {
        let slots = document.querySelectorAll('.box')
        slots.forEach((d) => {
            // console.log(d);
            d.addEventListener('click', function (){
                console.log(d);
            })
        })
    }
    return {any};
}

const hey = Board();
hey.any()

// players - factory

const Player = (name) => {
    const playername = () => name;

}

// game functionality - module

const CheckResult = () => {

}

//