import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMoviesList = ({watched, SetWatched}) => {

  return (
    <ul className='list'>
              {
                watched?.map((movie)=>(
                 <WatchedMovie movie={movie} key={movie.imdbID} watched={watched} SetWatched={SetWatched}/>
                ))
              }
            </ul>
  )
}

export default WatchedMoviesList