import React from 'react';
import changeUserData from '../actions/user-actions';
import { connect } from 'react-redux';
import moment from 'moment';

const DateInput = (props) => (
  <div className="option">
    <input name={props.name} 
      className="option__input" 
      type="date" 
      value={props.value} 
      required
      min={moment().format("YYYY-MM-DD")}
      onChange = {(e) => {
        props.dispatch(changeUserData(props.name, e.target.value))
      }
    }/>    
  </div>
);

export default connect()(DateInput);