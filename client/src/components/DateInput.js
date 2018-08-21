import React from 'react';
import changeUserData from '../actions/user-actions';
import { connect } from "react-redux";

const DateInput = (props) => {
  return (
  <div className="option">
    <input name={props.name} className="option__input" type='date' value={props.value} onChange = {(e) => {
      props.dispatch(changeUserData(props.name, e.target.value))
    }}/>    
  </div>
  )
};

export default connect()(DateInput);