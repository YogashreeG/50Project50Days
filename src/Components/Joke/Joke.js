import { configure } from "@testing-library/react";
import React from "react";
import "./Joke.css";


export function Joke() {

    const jokeEl = document.getElementById('joke')
    const JokeBtn = document.getElementById('JokeBtn')

   
    generateJoke()

    // function generateJoke() {
    //     const config = {
    //         headers: {
    //             Accept: "application/json"
    //         }
    //     }
    //     fetch('https://icanhazdadjoke.com/', config)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             jokeEl.innerHTML = data.joke
                
    //     })

    // }
     async function generateJoke() {
       const config = {
         headers: {
           Accept: "application/json",
         },
       };
       const res = await fetch("https://icanhazdadjoke.com/", config)
         const data = await res.json()
           jokeEl.innerHTML = data.joke;
         
     }




    return (
        <div className="container">
            <h3>Dont's Laugh Challenge</h3>
            <div id="joke" className="joke">// Joke goes here</div>
            <button id="JokeBtn" className="Btn">Get Another Joke</button>
            </div>
    )
}