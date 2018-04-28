import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

class Nav extends Component {
  handleLogOut = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>{this.props.curUser.name}</li>
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
            <Link to="/" onClick={this.handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  curUser: users[authedUser]
})

export default connect(mapStateToProps)(Nav);
