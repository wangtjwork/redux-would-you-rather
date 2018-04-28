import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="nav">
        <ul>
          <li>Would you rather</li>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
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
