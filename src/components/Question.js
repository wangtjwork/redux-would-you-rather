import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  handleVote = (voteForOne) => {
    console.log(`Voting for ${voteForOne ? 'OptionOne' : 'OptionTwo'}`);
  }

  render() {
    const { curUser, question } = this.props;
    const hasAnswered = curUser.answers.hasOwnProperty(question.id);
    const totalVotes = question.optionOne.votes.length
      + question.optionTwo.votes.length;

    const optionOnePercentage = percentCalculation(question.optionOne.votes.length, totalVotes);
    const optionTwoPercentage = 100 - optionOnePercentage;

    return (
      <div>
        <h2>{curUser.name}</h2>
        <h3>Would you rather...</h3>
        <div>
          <span>
            {hasAnswered === false
              ? <button onClick={() => this.handleVote(true)}>{question.optionOne.text}</button>
              : question.optionOne.text
            }
            {hasAnswered && (totalVotes === 0
              ? 'No Votes Yet'
              : optionOnePercentage + '%'
            )}
          </span>
          <span> Or </span>
          <span>
            {hasAnswered === false
              ? <button onClick={() => this.handleVote(false)}>{question.optionTwo.text}</button>
              : question.optionTwo.text
            }
            {hasAnswered && (totalVotes === 0
              ? 'No Votes Yet'
              : optionTwoPercentage + '%'
            )}
          </span>
        </div>
      </div>
    )
  }
}

const percentCalculation = (num, total) => {
  const percentage = Math.round(num * 100 / total);
  return percentage;
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    curUser: users[authedUser],
    question: questions["8xf0y6ziyjabvozdd253nd"],
  }
}

export default connect(mapStateToProps)(Question);
