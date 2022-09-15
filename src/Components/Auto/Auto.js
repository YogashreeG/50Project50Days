import React from "react";

import "./Auto.css";

export function Auto() {

    // const textEl = document.getElementById('text')
    // const speedEl = document.getElementById('speed')
    // const text = 'We Start Working'
    // let idx = 1 
    // // const speed = 300 / speedEl.value
    // WriteText()

    // function WriteText() {
    //     textEl.innerText = text.slice(0, idx)
    //     idx++;
    //     if (idx > TextTrack.length) {
    //         idx = 1;
    //     }
    //     setTimeout(WriteText, speed)
    // }

    // // speedEl.addEventListener('input',(e) => speed = 300 / e.target.value)


    return (
        <><h1>Starting.......</h1>
            <div>
                <label for="speed">Speed:</label>
                <input className="number" name="speed" id="speed" value="2" min="1" max="5" step="1"></input>
                
        </div></>
    )
}