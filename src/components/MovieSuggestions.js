import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieSuggestions = () => {
  const {movieName,movieResult} = useSelector(store=>store.gpt);
  if(!movieName) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-80 text-white'>
      <div>
        {
          movieName.map((movieName,index)=>(
            <MovieList key={movieName} title={movieName} movies={movieResult[index]}/>
          ))
        }
      </div>
    </div>
  )
}

export default MovieSuggestions;
