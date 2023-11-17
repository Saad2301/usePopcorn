import React from 'react'

const WatchedMovie = ({movie,watched,SetWatched}) => {
  const handleDelete=(id)=>{
    console.log('id is', id);
    const updatelist = watched.filter((movie) => movie.imdbID !== id);
    SetWatched(updatelist)
  }
  return (
    <li key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie} Poster`}/>
    <h3>{movie.Title}</h3>
    <div>
      <p>
      <span>⭐</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
      <span>✨</span>
        <span>{movie.rating}</span>
      </p>
      <p>
      <span>⌚</span>
        <span>{movie.Runtime}</span>
      </p>
      <button onClick={()=>handleDelete(movie.imdbID)}>X</button>
    </div>
  </li>
  )
}

export default WatchedMovie