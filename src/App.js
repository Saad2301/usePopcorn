import './App.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import { tempMovieData } from './MoviesData/MovieData';
import {tempWatchedData}  from './MoviesData/MovieData' 
import { useEffect, useState } from 'react';
import SearchBar from './Navbar/SearchBar';
import NumResult from './Navbar/NumResult';
import MoviesList from './Main/ListOfMovies/MoviesList';
import Box from './Main/ListOfMovies/Box';
import WatchedMoviesList from './Main/WatchedMoviesDetials/WatchedMoviesList';
import WatchedSummary from './Main/WatchedMoviesDetials/WatchedSummary';
import axios from 'axios';
import Loader from './Main/ListOfMovies/Loader';
import ErrorMessage from './Main/ListOfMovies/ErrorMessage';
import MovieDetails from './Main/WatchedMoviesDetials/MovieDetails';
function App() {
  const [movies, SetMovies] = useState([]);
  // const [movies, SetMovies] = useState(tempMovieData);
  const [watched, SetWatched] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError]=useState('');
  const [query, setQuery] = useState('saa');
  const [selectedId, sedtSelectedId] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const KEY = '29c5cda0';

  //     try {
  //       const res = await apiCaller({
  //         method: 'get',
  //         url: 's=interstellar', // Leave it empty for a relative path
         
  //       });
  //     // const res = await axios.get(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  //       SetMovies(res.data);
  //       console.log('response is', res.data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const KEY = '29c5cda0';
     try {
      setIsLoading(true);
      setError('');
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      if (res.status !== 200) {
        throw new Error('Something went wrong with movies fetching');
      }
       else if(res.data.Response === 'False'){
        throw new Error('Movies not Found')
      }     
      SetMovies(res.data.Search)
      console.log(res.data.Search);
    } catch (error) {
      console.error(error.message)
      setError(error.message)
      console.log('error', error);
    } finally{
      setIsLoading(false);
    }
  }
  if(query.length < 3){
    SetMovies([]);
    setError('');
    return
  }
    fetchData(); // Call fetchData function here

  }, [query]);

 
  return (
    <div>
      <Navbar>
            <SearchBar query = {query} setQuery = {setQuery}/>
            <NumResult movies={movies} />
      </Navbar>
      <Main>
            <Box>
             { isLoading && <Loader/>}
             {!isLoading && !error && <MoviesList movies={movies} sedtSelectedId={sedtSelectedId}/>}
            {error && <ErrorMessage message={error}/>}
            </Box>

            <Box>
             {
              selectedId ? (
                <MovieDetails
                 selectedId={selectedId}
                  sedtSelectedId={sedtSelectedId}
                  SetWatched={SetWatched}
                  watched={watched}
                  />
              ):(
                  <>
                  <WatchedSummary watched={watched}/>
                   <WatchedMoviesList watched={watched} SetWatched={SetWatched}/>
                  </>
              )
             }
              
            </Box>
            
      </Main>
      
    </div>
  );
}

export default App;


 // function Test(){
  //   const [movieRating, setMovieRating] = useState(0);
  //   return(
  //      <div>
  //          <StarRating maxRating={5} color='blue' onMovieRate={setMovieRating}/>
  //         <p>the movie was rated {movieRating} stars</p>
  //   </div>)
    
  // }
{/* <StarRating maxRating={5}/>
      <StarRating maxRating={5}
       color='black' size={28}
       message={['terible','bad','okay','good','amazing']}
       defaultRating={3}
       
       />
       <Test/> */}
       {/* <TextEapander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextEapander>

      <TextEapander
      collapsedNumWords={20}
      expandButtonText='show text'
      collapseButtonText='collaspe text'
      buttonColor='#1f09cd'
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextEapander>
      
      <TextEapander buttonInline={false} expanded={true}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextEapander> */}