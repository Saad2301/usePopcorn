import React from 'react'
import Movie from './Movie';

const MoviesList = ({movies,sedtSelectedId}) => {
  return (
        <ul className='list'>
             {
                movies.map((movie)=>(
                  <Movie movie={movie} key={movie.imdbID} sedtSelectedId={sedtSelectedId}/>
                ))
              } 
            </ul>
    
  )
}

export default MoviesList