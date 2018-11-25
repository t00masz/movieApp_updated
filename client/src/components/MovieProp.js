import React from 'react';
import Label from "./Label";

const MovieProp = (props) => (
  <div className="movie-prop"> 
    <Label value={props.title} />
    <Label value={props.description} />
  </div> 
)

export default MovieProp;