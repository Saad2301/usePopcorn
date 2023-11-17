import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StarRating from '../Rating/StarRating';
import Loader from '../ListOfMovies/Loader';
const MovieDetails = ({ selectedId, sedtSelectedId, SetWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [rating, setMovieRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const Rating = watched.find((movie)=> movie.imdbID === selectedId)?.rating
  const { Title, Year, Poster, Runtime,
    imdbRating, Plot, Released, Actors,
    Director, Genre } = movie;
  const onClose = () => {
    sedtSelectedId(null);
  };
  const handleAddMovie = () => {
    console.log('movie is');
    const newMovie = {
      imdbID: selectedId,
      Title, Year, Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(' ').at(0)),
      rating
    }

    SetWatched((watched) => [...watched, newMovie]);
    onClose();
  }
  useEffect(() => {
    const getMoviesDetails = async () => {
      setIsLoading(true)
      const KEY = '29c5cda0';
      try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
        //console.log('get res', res.data);
        setMovie(res.data)
      }
      catch (error) {
        console.log('error is', error);
      }
      setIsLoading(false)
    };
    getMoviesDetails();
  },
   [selectedId]
   );
 
  useEffect(()=>{
    if(!Title) return;
    document.title = (`Movie | ${Title}`);
    return ()=>{
      document.title = 'usePopcorn'
    }
  },
  
  [Title]
  );
  return (
    <div className='details'>
      {
        isLoading ? <Loader /> :
          <>
            <header>
              <button className='btn-back' onClick={onClose}>
                &larr;
              </button>
              <img src={Poster} alt={`Poster of ${movie} movie`} />
              <div className='details-overview'>
                <h2>{Title}</h2>
                <p>{Released} &bull; {Runtime}</p>
                <p>{Genre}</p>
                <p>
                  <span>⭐</span>
                  {imdbRating} IMdb Rating
                </p>
              </div>
            </header>
            <section>
              <div className='rating'>
                
                  {!isWatched ?
                    <>
                    <StarRating
                      maxRating={5} size={24}
                      onMovieRate={setMovieRating}
                    // message={['terible','bad','okay','good','amazing']}
                    />
                   {
                    rating > 1 && <button onClick={handleAddMovie}>
                      +Add a Movie
                    </button>
                  } 
                  </>
                  : <p>You already rated with {Rating}</p>
         }
                
              </div>
              <p>
                <em>{Plot}</em>
              </p>
              <p>Starring {Actors}</p>
              <p>Directed by {Director}</p>
            </section></>
      }

    </div>
  )
}

export default MovieDetails