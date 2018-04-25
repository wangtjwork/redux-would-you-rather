import React, { Component } from 'react';
import setAuthedUser from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    selectedUser: null
  }

  handleChange = (e) => {
    const id = e.target.value;

    this.setState({
      selectedUser: id,
    });
    console.log(id);
  }

  render() {
    const { users } = this.props;

    return (
      <select onChange={this.handleChange}>
        {
          users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
      </select>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => ({
      id,
      name: users[id].name
    }))
  }
}

export default connect(mapStateToProps)(Login);
