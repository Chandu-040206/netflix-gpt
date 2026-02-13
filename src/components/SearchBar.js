import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import { detectGenre } from "../utils/movieLogic";
import { API_KEY, API_OPTIONS } from "../utils/constant"
import { addGptMovies } from "../utils/gptSlice";

const SearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const handleSearch = async () => {
        const query = searchText.current.value;
        if (!query) return;

        const genreId = detectGenre(query);

        const res = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        const data = await res.json();
        const movies = data.results.slice(0, 5).map(movie => movie.title);
        const promiseArray = movies.map((movie) => searchMovie(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovies({movieName : movies,movieResult : tmdbResults}));
    };

    const searchMovie = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    };

    
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 grid grid-cols-12 bg-black" onSubmit={(e) => e.preventDefault()}>
                <input className='p-2 m-4 col-span-9'
                    ref={searchText}
                    type='text' placeholder={lang[langKey].gptSearchPlaceholder}>
                </input>
                <button className='bg-red-600 col-span-3 text-white rounded-lg m-4 px-2 py-1' onClick={handleSearch}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default SearchBar
