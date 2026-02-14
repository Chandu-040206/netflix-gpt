import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen w-full">
      <VideoBackground movieId={id} />

      <div className="absolute bottom-40 left-12 z-20 max-w-xl">
        <VideoTitle
          title={original_title}
          overview={overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;
