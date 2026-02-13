import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  if (!trailerVideo) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      
      <iframe
        className="
          absolute top-1/2 left-1/2
          min-w-full min-h-full
          -translate-x-1/2 -translate-y-1/2
          scale-150
          pointer-events-none
        "
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0`}
        title="Background Trailer"
        allow="autoplay; encrypted-media"
      />

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default VideoBackground;
