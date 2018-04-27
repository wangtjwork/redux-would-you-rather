import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  sumQuestionAndAnswer = (user) => {
    return user.questions.length + Object.keys(user.answers).length;
  }

  render() {
    console.log(this.props);
    const { users } = this.props;
    const sortedUsers = Object.keys(users).map(id => users[id])
      .sort((a, b) => this.sumQuestionAndAnswer(b) - this.sumQuestionAndAnswer(a));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                User
              </th>
              <th>
                # of Questions
              </th>
              <th>
                # of Answers
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.questions.length}</td>
                <td>{Object.keys(user.answers).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
};

export default connect(mapStateToProps)(LeaderBoard);
