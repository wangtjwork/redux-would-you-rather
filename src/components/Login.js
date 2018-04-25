import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    selectedUser: ''
  }

  handleChange = (e) => {
    const id = e.target.value;

    this.setState({
      selectedUser: id,
    });
  }

  handleLogin = () => {
    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.selectedUser));

    {/* TODO: Redirect to HomePage*/}
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
          <option key='' value=''>--</option>
          {
            users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))
          }
        </select>
        <button onClick={this.handleLogin}>Log In</button>
      </div>
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
