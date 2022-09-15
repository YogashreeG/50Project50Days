import React, from 'react';
 //import './DrawingUI.js';
import './DrawingUI.css';

function  DrawingUI() {
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
        )
   }
