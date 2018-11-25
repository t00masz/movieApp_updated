import React, { Component } from "react";
import { connect } from "react-redux";
import MovieProp from "./MovieProp";
import Label from "./Label";
import getCommentsFromDatabse from "../actions/get-comments-from-database";

class Comments extends Component {

    componentDidMount() {
        this.props.getCommentsFromDatabse();
    }
    render() {
        if (!this.props.commentsData[0]) {
            return (
                <div className="movie-prop"> 
                    <Label value="The list is empty." />
                </div>
            )
        }
        else {
            return (
                this.props.commentsData.map(commentsData => (
                         
                    <div className="movie-data-container">   
                        <div>             
                            <MovieProp 
                                title="Title:"
                                description={commentsData.Title}
                            />
                            <MovieProp 
                                title="Comment:"
                                description={commentsData.Comment}
                            />
                        </div>
                    </div>
                ))
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentsFromDatabse: () => dispatch(getCommentsFromDatabse())
    
});

const mapStateToProps = (state) => ({ 
    commentsData: state.commentsFromDatabase
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Comments);