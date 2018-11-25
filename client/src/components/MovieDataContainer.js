import React from "react";
import { connect } from "react-redux";
import saveMovieToDatabase from "../actions/save-movie-to-database";

import MovieProp from "./MovieProp";
import Button from "./Button";
import Label from "./Label";

export const MovieDataContainer = (props) => {
    if (!props.movieData.Title && !props.connectionStatus) {
        return (
            <div /> 
        )
    }
    else if (!props.movieData.Title && props.connectionStatus) {
        return (
            <div className="movie-prop"> 
                <Label value={props.connectionStatus} />
            </div> 
        )
    }
    else if (props.movieData.Response && props.movieData.Error) {
        return (
            <div className="movie-prop"> 
                <Label value={props.movieData.Error} />
            </div> 
        )
    }
    else {
        return (
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    props.dispatch(saveMovieToDatabase({
                        movieData: props.movieData })
                )}
            }>
                <div className="movie-data-container">             
                    <img src={props.movieData.Poster} alt="poster" align="left" width="325px" height="485px"/>
                    <div>   
                        <MovieProp 
                            title="Title:"
                            description={props.movieData.Title}
                        />
                        <MovieProp 
                            title="imdb Rating:"
                            description={props.movieData.imdbRating}
                        />
                        <MovieProp 
                            title="imdb Votes:"
                            description={props.movieData.imdbVotes}
                        />
                        <MovieProp 
                            title="Year:"
                            description={props.movieData.Year}
                        />
                        <MovieProp 
                            title="Director:"
                            description={props.movieData.Director}
                        />
                        <MovieProp 
                            title="Genre:"
                            description={props.movieData.Genre}
                        />
                        <MovieProp 
                            title="Country:"
                            description={props.movieData.Country}
                        />
                        <MovieProp 
                            title="Released:"
                            description={props.movieData.Released}
                        />
                        <MovieProp 
                            title="BoxOffice:"
                            description={props.movieData.BoxOffice}
                        />
                    </div> 
                </div>
                <div className="container">      
                    <Button 
                        title="Save!"
                    />
                </div>
            </form>  
        )
    }
};

const mapStateToProps = (state) => (
    { 
        connectionStatus: state.connectionStatus,
        movieData: state.movieData
    }
  );
  
export default connect(mapStateToProps)(MovieDataContainer);