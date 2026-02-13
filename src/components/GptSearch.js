import { BACKGROUND_IMAGE } from "../utils/constant"
import MovieSuggestions from "./MovieSuggestions"
import SearchBar from "./SearchBar"

const GptSearch = () => {
    return (
        <div >
            <div className="fixed -z-20">
                <img src={BACKGROUND_IMAGE}
                    alt="bgimage" />
            </div>
            <SearchBar />
            <MovieSuggestions />
        </div>
    )
}

export default GptSearch
