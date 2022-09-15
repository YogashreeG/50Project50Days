import React from "react";
import "./SoundBoard.css";

export function SoundBoard() {

  // const sounds = ['Audio1', 'Audio2', 'Audio3']
  // sounds.forEach(sound => {
  //   const btn = document.createElement('button')
  //   btn.classList.add('btn')
  //   btn.innerText = sound
  //   document.getElementById('buttons').appendChild(btn)
  // })

  return (
    <>
    
      <div id="container">
        <audio className="Audio1" src="./audio1.mp3"></audio>
        <audio className="Audio2" src="./audio2.mp3"></audio>
        <audio className="Audio3" src="./audio3.mp3"></audio>
        <div className="buttons"></div>
      </div>
    </>
  );
}