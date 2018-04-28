import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';
import { Link, withRouter } from 'react-router-dom';
import User from './User'


class Question extends Component {
  handleVote = (option) => {
    const { curUser, question, dispatch } = this.props;
    const vote = {
      userID: curUser.id,
      questionID: question.id,
      option
    };
    dispatch(handleSaveAnswer(vote));
  }

  render() {
    const { users, question, authedUser } = this.props;
    const curUser = users[authedUser];
    const author = users[question.author]
    const hasAnswered = curUser.answers.hasOwnProperty(question.id);
    const totalVotes = question.optionOne.votes.length
      + question.optionTwo.votes.length;

    const optionOnePercentage = percentCalculation(question.optionOne.votes.length, totalVotes);
    const optionTwoPercentage = 100 - optionOnePercentage;

    return (
      <div>
        <h3>Author:</h3>
        <User user={author} />
        <h3>Would You Rather...</h3>
        <div>
          <span className={hasAnswered && curUser.answers[question.id] == 'optionOne' ? 'chosen-option' : ''}>
            {hasAnswered === false
              ? <button onClick={() => this.handleVote('optionOne')}>{question.optionOne.text}</button>
              : question.optionOne.text
            }
            {hasAnswered && (totalVotes === 0
              ? 'No Votes Yet'
              : optionOnePercentage + '%'
            )}
          </span>
          <span> Or </span>
          <span  className={hasAnswered && curUser.answers[question.id] == 'optionTwo' ? 'chosen-option' : ''}>
            {hasAnswered === false
              ? <button onClick={() => this.handleVote('optionTwo')}>{question.optionTwo.text}</button>
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

const mapStateToProps = ({ users, questions, authedUser }, ownProps) => {
  const { questionID } = ownProps.match.params;
  return {
    users,
    question: questions[questionID],
    authedUser
  }
}

export default connect(mapStateToProps)(Question);
