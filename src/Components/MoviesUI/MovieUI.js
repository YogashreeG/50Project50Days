import React from "react";
import "./MovieUI.css";

export function MovieUI() {
    // const API_URL =
    //     'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=451902a01adb9a0551292c027f9d9c36&page=1'
    // const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    // const SEARCH_URL =
    //     'https://api.themoviedb.org/3/search/movie?api_key=451902a01adb9a0551292c027f9d9c36&quer="'
    
    // const form = document.getElementById('form')
    // const search = document.getElementById('search')
    // getMovies(API_URL)
    // async function getMovies(url) {
    //     const res = await fetch(url)
    //     const data = await res.json()


    //     console.log(data.results)
    // }
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()

    //     const searchTerm = search.value

    //     if (searchTerm && searchTerm !== '') {
    //         getMovies(SEARCH_URL)
    //     }
    // })


    
    
    
    
    
    
    return (
      <>
        <header>
          <form id="form">
            <input
              type="text"
              id="search"
              className="search"
              placeholder="search"
            ></input>
          </form>
        </header>
        <main id="main">
          <div className="movie">
            <img
              src="https://images.unsplash.com/photo-1581785735604-419514e6099e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dGhlYXRlcnN8fDB8fHx8MTYzMTM1NzQ1Mg&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
            ></img>
            <div className="movie-info">
              <h3>Movie Title</h3>
              <span className="green">9.8</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              How many times have you sat down for the evening, gotten
              comfortable with your drink, put on your lounge pants. And then
              you discover there are no good movies to watch? For most people,
              it happens frequently.
            </div>
          </div>

          <div className="movie">
            <img
              src="https://images.unsplash.com/photo-1581785735604-419514e6099e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dGhlYXRlcnN8fDB8fHx8MTYzMTM1NzQ1Mg&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
            ></img>
            <div className="movie-info">
              <h3>Movie Title</h3>
              <span className="orange">9.8</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              How many times have you sat down for the evening, gotten
              comfortable with your drink, put on your lounge pants. And then
              you discover there are no good movies to watch? For most people,
              it happens frequently.
            </div>
          </div>

          <div className="movie">
            <img
              src="https://images.unsplash.com/photo-1581785735604-419514e6099e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dGhlYXRlcnN8fDB8fHx8MTYzMTM1NzQ1Mg&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
            ></img>
            <div className="movie-info">
              <h3>Movie Title</h3>
              <span className="red">9.8</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              How many times have you sat down for the evening, gotten
              comfortable with your drink, put on your lounge pants. And then
              you discover there are no good movies to watch? For most people,
              it happens frequently.
            </div>
          </div>
        </main>
      </>
    );
}