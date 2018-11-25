import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    <div>
      <h1 className="header__title">
        {props.title}
      </h1>
    </div>
    <div>
      <div className="header__content">
        <NavLink to="/" className="option__link" activeClassName="option__link-is-active" exact={true}>
          Search
        </NavLink>  
        <NavLink to="/favourites" className="option__link" activeClassName="option__link-is-active">
          Favourites
        </NavLink>  
        <NavLink to="/comments" className="option__link" activeClassName="option__link-is-active">
          Comments
        </NavLink> 
      </div>
    </div>
  </div>
);

export default Header;
