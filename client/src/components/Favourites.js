import React, { Component } from "react";
import { connect } from "react-redux";
import MovieProp from "./MovieProp";
import Label from "./Label";
import getMoviesFromDatabse from "../actions/get-movies-from-database";

class Favourites extends Component {

    componentDidMount() {
        this.props.getMoviesFromDatabse();
    }
    render() {
        if (!this.props.movieData[0]) {
            return (
                <div className="movie-prop"> 
                    <Label value="The list is empty." />
                </div>
            )
        }
        else {
            return (
                this.props.movieData.map(movieData => (
                    <div>
                        <div className="movie-data-container">             
                            <img src={movieData.Poster} alt="poster" align="left" width="325px" height="485px"/>
                            <div>   
                                <MovieProp 
                                    title="Title:"
                                    description={movieData.Title}
                                />
                                <MovieProp 
                                    title="imdb Rating:"
                                    description={movieData.imdbRating}
                                />
                                <MovieProp 
                                    title="imdb Votes:"
                                    description={movieData.imdbVotes}
                                />
                                <MovieProp 
                                    title="Year:"
                                    description={movieData.Year}
                                />
                                <MovieProp 
                                    title="Director:"
                                    description={movieData.Director}
                                />
                                <MovieProp 
                                    title="Genre:"
                                    description={movieData.Genre}
                                />
                                <MovieProp 
                                    title="Country:"
                                    description={movieData.Country}
                                />
                                <MovieProp 
                                    title="Released:"
                                    description={movieData.Released}
                                />
                                <MovieProp 
                                    title="BoxOffice:"
                                    description={movieData.BoxOffice}
                                />
                            </div> 
                        </div>
                    </div>
                ))
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMoviesFromDatabse: () => dispatch(getMoviesFromDatabse())
    
});

const mapStateToProps = (state) => ({ 
    movieData: state.moviesFromDatabase
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);