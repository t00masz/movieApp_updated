import React from 'react';

const Label = (props) => (
  <div className="option">
    <label className="option__label">
        {props.value}
    </label>
  </div>
)

export default Label;