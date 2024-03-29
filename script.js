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

const tanker = document.querySelector('.box');
const turet = document.querySelector('.turets');

const icon = ["img1","img2","img3","img4"];


//use to get middle point(axis) of the tank
const boxCenter = [box.offsetLeft + (box.offsetWidth / 2),
    box.offsetTop + (box.offsetHeight / 2)
];
//access by: boxCenter[0],boxCenter[1]




    //to get degrees
const getDeg = (e) => {
    let angle = Math.atan2(e.clientX - boxCenter[0], -(e.clientY - boxCenter[1]));
    //multiply by 180/pi to get angles
    return angle * (180 / Math.PI);
}

//get degrees to show where bullets go
const degRadius=(deg) =>{
    return deg*(Math.PI/180);
    }

//add a mousedown Event to shoot
const mouseDown = (e) => {
    if (gamePlay) {
        //create bullets
        console.log('fire');
        let div = document.createElement('div');

        let deg = getDeg(e);
        div.setAttribute('class', 'bullets')

        div.movey = -5 * Math.sin(degRadius(deg));
        div.movex = 5 * Math.cos(degRadius(deg));
        div.style.left = (boxCenter[0]-6) + 'px';
        div.style.top = (boxCenter[1]-6) + 'px';
        div.style.width = 10 + 'px';
        div.style.height = 10 + 'px';

        //add to container element
        container.appendChild(div);
    }
}




const mousePosition = (e) => {
    let deg = getDeg(e)
    //console.log(deg);
    box.style.transform = `rotate(${deg}deg)`;
    //support for other browsers
    box.style.webkitTransform = `rotate(${deg}deg)`;
    box.style.mozTransform = `rotate(${deg}deg)`;
    box.style.msTransform = `rotate(${deg}deg)`;
    box.style.oTransform = `rotate(${deg}deg)`;

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

    const moveShots=()=>{
        let shots = document.querySelectorAll('.bullets');

        for (let shot of shots){
            if (shot.offsetTop > 600 || shot.offsetTop < 0 || shot.offsetLeft >800 || shot.offsetLeft < 0){
                //remove from parent class
                shot.parentNode.removeChild(shot);
            } else{
                shot.style.top = shot.offsetTop + shot.movex + 'px';
            shot.style.left = shot.offsetLeft + shot.movey + 'px';
            }

        }
    }

    //random number gen
    const randGen = (num)=>{
        return Math.ceil(Math.random()*num);
    }

    const makeEnemies = (num)=>{
         let div = document.createElement('div');
         let myBugs = `img${randGen(icon.length)}`;
         div.setAttribute('class', 'enemy')
         div.innerHTML=`<img src="img/${myBugs}.jpg" class="enemy">`;
         container.appendChild(div);

    }

    //create emi
    const setupEnemies = (num)=>{
        for(let x=0;x<num;x++){
            makeEnemies();
        }
    }

    //Set up enemies
    setupEnemies(10)



    //start game  session
    const gameSession = () => {
        if (gamePlay) {

            //move shots
            moveShots()

            //update dashboard

            //move enemy

            //Change tank color
            box.style.background = 'green';
            box.style.borderRadius = '5px';
            tanker.style.height = '40px';
            turet.style.backgroundImage = 'linear-gradient(red, yellow,green, blue)';
            animateGame = requestAnimationFrame(gameSession);
        }
    }

    //Similar to setinterval()
    animateGame = requestAnimationFrame(gameSession);
}



startBtn.addEventListener('click', startGame);