import React, { useEffect, useState } from "react";

import "./App.css";
import logo from "./search.svg";
import MovieCard from "./MovieCard";
// 6b14e1cf

const API_URL = "http://www.omdbapi.com?apikey=6b14e1cf";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);

  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1> Movie Search App</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={logo}
          alt="search"
          onClick={()=> searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
        {movies.map((movie)=>(
           <MovieCard  movie={movie} />
        ))}
        </div>
      ) : (
        <div className="invalidmovie">
         <h2>Search for a Valid movie <span style={{color:"default"}}>📽 </span></h2>
         <br /><br />
         <h2>
            Hope you will like it....☺
         </h2>
         <br /><br /><br />
         <p className="link1">Devlop BY <a  href="https://arishsaifi.vercel.app" target="blank"><span className="mylink">Harish saifi</span></a> With 💖</p>
        </div>
      )}
    </div>
  );
};

export default App;
