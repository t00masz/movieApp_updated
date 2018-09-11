import React from 'react';

const Label = (props) => (
  <div className="option">
    <label name={props.name} 
      className="option__label">
        {props.value}
    </label>
  </div>
)

export default Label;