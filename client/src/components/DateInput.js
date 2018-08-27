import React from 'react';
import changeUserData from '../actions/user-actions';
import { connect } from 'react-redux';
import getDate from '../func/getDate';

const DateInput = (props) => (
  <div className="option">
    <input name={props.name} 
      className="option__input" 
      type="date" 
      value={props.value} 
      required
      min={getDate()}
      onChange = {(e) => {
        props.dispatch(changeUserData(props.name, e.target.value))
      }
    }/>    
  </div>
);

export default connect()(DateInput);