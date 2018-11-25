import React from 'react';

const Button = (props) => (
  <div>
    <input className="button" 
      type="submit"
      value={props.title}/>
  </div>
);

export default Button;
