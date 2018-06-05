import React, {
  Component,
} from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">MobX App</NavLink>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><NavLink to="/">Home</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
