
import React from 'react';

function DrawingUI() {
    
    // const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");

    // let size = 20;
    // let color = "black";
    // let x;
    // let y;

    // canvas.addEventListener("mousedown", (e) => {
    //     // eslint-disable-next-line no-undef
    //     isPressed = true;

    //     x = e.offsetX;
    //     y = e.offsetY;
    // });

    // canvas.addEventListener("mouseup", (e) => {
    //     // eslint-disable-next-line no-undef
    //     isPressed = true;

    //     x = undefined;
    //     y = undefined;
    // });

    // canvas.addEventListener("mousemove", (e) => {
    //     // eslint-disable-next-line no-undef
    //     if (isPressed) {
    //         const x2 = e.offsetX;
    //         const y2 = e.offsetY;

    //         drawCircle(x2, y2);
    //         drawLine(x, y, x2, y2);
    //     }
    // });

    // function drawCircle(x, y) {
    //     ctx.beginPath();
    //     ctx.arc(x, y, size, 0, Math.PI * 2, true);
    //     ctx.fillStyle = color;
    //     ctx.fill();
    // }

    // function drawLine(x1, y1, x2, y2) {
    //     ctx.beginPath();
    //     ctx.moveTo(x1, y1);
    //     ctx.lineTo(x2, y2);
    //     ctx.strokeStyle = color;
    //     ctx.lineWidth = size * 2;
    //     ctx.Stroke();
    }

  return (

        <div>
            <canvas id='canvas' style={{ width: '800', height: '800' }}></canvas>
            <div className='toolbox'>
                <button id='decrease'> -</button>
                <span id='size'> 20</span>
                <button id='increase'> +</button>
                <input type='color' id='color' />
                <button id='clear'>clr</button>
            </div>
        </div>

    );


export default DrawingUI