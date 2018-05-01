import React from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { NavLink, Link } from 'react-router-dom';

const Nav = ({ dispatch, userName }) => {
  const handleLogOut = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  return (
    <nav className="nav">
      <ul>
        <li>{userName}</li>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" exact activeClassName="active">
            New
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        <li>
          <Link to="/" onClick={handleLogOut}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
