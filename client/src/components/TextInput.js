import React from 'react';
import changeUserData from '../actions/user-actions';
import { connect } from "react-redux";

const TextInput = (props) => {
  return (
  <div className="option">
    <input className="option__input" name={props.name} type='text' placeholder={props.placeholder} value={props.value} onChange = {(e) => {
      props.dispatch(changeUserData(props.name, e.target.value))
    }}/>    
  </div>
  )
};

export default connect()(TextInput);
