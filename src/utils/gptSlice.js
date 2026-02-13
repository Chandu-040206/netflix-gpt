import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovies:(state,action)=>{
            const {movieName,movieResult}=action.payload;
            state.movieName=movieName;
            state.movieResult=movieResult
        }
    }
});

export const {toggleGptSearchView,addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;