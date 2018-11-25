import React from "react";
import { connect } from "react-redux";

import TextInput from "./TextInput"
import Button from "./Button";
import MovieDataContainer from "./MovieDataContainer";
import getMovieFromApi from "../actions/get-movie-from-api";

export const Search = (props) => (
    <form 
        autoComplete="on" 
        onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(getMovieFromApi({
                movieTitle: props.movieTitle })
            )}
        }>

        <div>
            <TextInput 
                name="movieTitle" 
                placeholder="Movie title (required)" 
                type="text"
                pattern="^[\w ]{2,30}$"
                value={props.movieTitle}
            />
            <Button 
                title="Search"
            />
            <MovieDataContainer />
        </div>
    </form>
);

const mapStateToProps = (state) => (
    { 
        movieTitle: state.movieTitle,
        movieData: state.movieData
    }
);

export default connect(mapStateToProps)(Search);
