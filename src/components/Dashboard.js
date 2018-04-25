import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { curUser, questions } = this.props;

    return (
      <div>
        <h3>{curUser.name}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { authedUser, users, questions } = state;
  return {
    authedUser,
    curUser: users[authedUser],
    questions
  }
}

export default connect(mapStateToProps)(Dashboard);
