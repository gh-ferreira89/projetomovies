import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkeTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";

import './Movie.css';

const movieURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;



const Movie = () => {
  const {id} = import.meta.env.VITE_API;
  const {movie, setMovie} = import.meta.env.VITE_API_KEY;

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL =  '${movieURL}${id}?${apiKEY}';
    getMovie(movieURL);
  }, []);

  return 
  <div className="movie-page">
    {movie && (
    <>
      <MovieCard movie={movie} showLink={false} />
      <p className="tagline">{movie.tagline}</p>
      <div className="info">
        <h3>
          <BsWallet2 /> Orçamento:
        </h3>
        <p>{formatCurrency(movie.budget)}</p>
      </div>

      <div className="info">
        <h3>
          <BsGraphUp /> Receita:
        </h3>
        <p>{formatCurrency(movie.revenue)}</p>
      </div>

      <div className="info">
        <h3>
          <BsHourglassSplit /> Duraçao:
        </h3>
        <p>{movie.runtime} minutos</p>
      </div>

      <div className="info description">
        <h3>
          <BsFillFileEarmarkeTextFill /> Descriçao:
        </h3>
        <p>{movie.overview}</p>
      </div>
    </>
    )}
  </div>;
    
  };
  
  export default Movie;