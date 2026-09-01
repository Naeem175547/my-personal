import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
  return (
    <>
    <div className='movie-card'>
    <img alt={movie.Title} src={movie.Poster}/>
    <h3>{movie.Title}</h3>
    <p>{movie.year}</p>
    <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    

    </div>



    </>
  )
}
