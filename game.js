'use strict'

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.enemies = [];
    };

    startLoop() {
        const loop = () =>{
            console.log('out of loop');

            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();


            window.requestAnimationFrame(loop);
        }


        window.requestAnimationFrame(loop);
    };

    updateCanvas() {


    };
    clearCanvas() {
        this.ctx.clearRect(0,0,this.canvas.with,this.canvas.heigth);

    };
    drawCanvas() {


    };

}

