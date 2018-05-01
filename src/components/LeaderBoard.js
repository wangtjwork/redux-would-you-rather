import React from 'react';
import { connect } from 'react-redux';

const LeaderBoard = ({ users }) => {
  const sumQuestionAndAnswer = (user) => {
    return user.questions.length + Object.keys(user.answers).length;
  }

  const sortedUsers = Object.keys(users).map(id => users[id])
    .sort((a, b) => sumQuestionAndAnswer(b) - sumQuestionAndAnswer(a));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Rank
              </th>
              <th>
                User
              </th>
              <th>
                Avatar
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
            {sortedUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <img src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                  /></td>
                <td>{user.questions.length}</td>
                <td>{Object.keys(user.answers).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
};

export default connect(mapStateToProps)(LeaderBoard);
