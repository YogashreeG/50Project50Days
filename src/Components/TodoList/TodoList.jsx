//import React, { Component } from 'react';
import './TodoList.css';
//import './TodoList.js';

export default function TodoList() {
// const form = 'form';
// const input = 'input';
// const todosUL = 'todos';

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     addTodo()
// })
    
    function btnClicked() {
        console.log('Button Clicked')
    }
    
function addTodo(e) {
    // let todoText = input.value
    // if (e) {
    //     todoText = e.text
    // }

    if(e.code === "Enter")
    console.log(e.target.value)
    }
        

 
        return (
            <><h1>Todos</h1>
                <form   id="form">
                    <input onKeyPress={ addTodo }  type="text" className="input" id="input" placeholder="Enter your todo" autoComplete="off" />
                    <ul className="todos" id="todos"></ul>
                    <button onClick={ btnClicked } type='submit'>submit</button>
                </form>
            
            </>

        );
    }
//  onSubmit={(e)=>addTodo(e)}