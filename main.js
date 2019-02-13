'use strict'

const main = () => {
    
    const buildDom = (html) => {

        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    }
    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
        <section class="splash-screen-screen">
        <h1>Eternal Enemies</h1>
        <button>Start</button>
        `)

    const startButton = document.querySelector('button');
    startButton.addEventListener('click',buildGameScreen);
    
    }
    const buildGameScreen = () => {
        const gameScreen = buildDom(`
        <section class = "game-screen">
        <canvas></canvas>
        </section>    
        `);

        const width = document.querySelector('.game-screen').offsetWith;
        const heigth = document.querySelector('.game-screen').offsetHeigth;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width',width);
        canvasElement.setAttribute('heigth',heigth);

        setTimeout(buildGameOver, 3000);

        const game = new Game(canvasElement);
        game.startLoop(); 

    }
    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
        <section class = "game-over">
        <h1>Game-Over</h1>
        <button>Restart</button>
        </section>
        `)

        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click',buildGameScreen);
    }


    buildSplashScreen();


}


window.addEventListener('load',main);                       //callback de carga el main
