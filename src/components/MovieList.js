import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-10 py-6">

            <h1 className="text-white text-2xl font-semibold mb-4">
                {title}
            </h1>

            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex gap-4">
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MovieList;
