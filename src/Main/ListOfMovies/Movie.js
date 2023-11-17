import React from 'react'

const Movie = ({movie,sedtSelectedId}) => {
  const getMovieId=(id)=>{
    sedtSelectedId((currentID)=> (id === currentID ? null : id))
    
  }
  return (
    <li onClick={()=>getMovieId(movie.imdbID)}>
    <img src={movie.Poster} alt={`${movie} Poster`}/>
    <h3>{movie.Title}</h3>
    <div>
      <p>
      <span>📆</span>
      <span>{movie.Year}</span>
      </p>
    </div>
  </li>
  )
}

export default Movie