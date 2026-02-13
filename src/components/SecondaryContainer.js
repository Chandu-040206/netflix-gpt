import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative bg-black -pt-15">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topratedMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="UpComing" movies={movies?.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
