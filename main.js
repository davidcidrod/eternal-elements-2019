'use strict'

const main = () => {
    
    const buildDom = (html) => {

        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    }
    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
        <h1>Hello</h1>`)

    }
    buildSplashScreen();
}


window.addEventListener('load',main);                       //callback de carga el main
