//get start button
const startBtn = document.querySelector('.btnStart');

const gameOver = document.getElementById('gameOver');

const container = document.getElementById('container');

let gamePlay = false;

//Create player object
let player;

//to animate the frame constantly
let animateGame;


//add a mousedown Event to shoot
const mouseDown = (e) =>{
    if(gamePlay){
        console.log('FIRE');
    }

}

container.addEventListener('mousedown', mouseDown);




//start game button functionality
const startGame=()=>{
    gamePlay = true;
    gameOver.style.display = 'none';

    player = {
        score: 0,
        barwidth:100,
        lives:100
    }

    //start game  session
    const gameSession = () =>{
        if(gamePlay){
            //move shots
            //update dashboard
            //move enemy
        animateGame = requestAnimationFrame(gameSession);
    }
}

    animateGame = requestAnimationFrame(gameSession);


}



startBtn.addEventListener('click', startGame);




