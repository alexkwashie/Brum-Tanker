//get start button
const startBtn = document.querySelector('.btnStart');

const gameOver = document.getElementById('gameOver');

const container = document.getElementById('container');

let gamePlay = false;

//Create player object
let player;

//to animate the frame constantly
let animateGame;

//Get base of tank
const box = document.querySelector('.base');

//use to get middle point(axis) of the tank
const boxCenter = [box.offsetLeft + (box.offsetWidth / 2),
    box.offsetTop + (box.offsetHeight / 2)
];
//access by: boxCenter[0],boxCenter[1]

console.log(boxCenter)


//add a mousedown Event to shoot
const mouseDown = (e) => {
    if (gamePlay) {
        console.log('FIRE');
    }
}


//to get degrees
const getDeg = (e) => {
    let angle = Math.atan2(e.clientX - boxCenter[0], -(e.clientY - boxCenter[1]));
    //multiply by 180/pi to get angles
    console.log(angle)
    return angle * (180 / Math.PI);
}

const mousePosition = (e) => {
    let deg = getDeg(e)
    console.log(deg);
    box.style.transform = `rotate(${deg}deg)`;
}

container.addEventListener('mousemove', mousePosition);
container.addEventListener('mousedown', mouseDown);




//start game button functionality
const startGame = () => {
    gamePlay = true;
    gameOver.style.display = 'none';

    player = {
        score: 0,
        barwidth: 100,
        lives: 100
    }

    //start game  session
    const gameSession = () => {
        if (gamePlay) {

            //move shots
            //update dashboard
            //move enemy

            //Change tank color
            box.style.background = 'green';
            box.style.borderRadius = '5px';
            animateGame = requestAnimationFrame(gameSession);
        }
    }

    //Similar to setinterval()
    animateGame = requestAnimationFrame(gameSession);


}



startBtn.addEventListener('click', startGame);