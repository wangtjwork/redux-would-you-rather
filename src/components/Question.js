import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';
import { Link, withRouter } from 'react-router-dom';
import User from './User'


class Question extends Component {
  handleVote = (option) => {
    const { users, question, dispatch, authedUser } = this.props;
    const vote = {
      userID: users[authedUser].id,
      questionID: question.id,
      option
    };
    dispatch(handleSaveAnswer(vote));
  }

  render() {
    const { users, question, authedUser } = this.props;
    if (question === undefined) {
      return (
        <div>404 Not found!</div>
      )
    }
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
        {
          hasAnswered === false
          ? (
            <div>
              <span>
                <button onClick={() => this.handleVote('optionOne')}>{question.optionOne.text}</button>
              </span>
              <span> OR </span>
              <span>
                <button onClick={() => this.handleVote('optionTwo')}>{question.optionTwo.text}</button>
              </span>
          </div>
          )
          : (
            <div>
              <div className={curUser.answers[question.id] === 'optionOne' ? 'chosen-option' : ''}>
                <p>Option One: {question.optionOne.text}</p>
                <p>Voted: {question.optionOne.votes.length}</p>
                <p>Percentage: {optionOnePercentage}%</p>
              </div>
              <hr />
              <div className={curUser.answers[question.id] === 'optionTwo' ? 'chosen-option' : ''}>
                <p>Option Two: {question.optionTwo.text}</p>
                <p>Voted: {question.optionTwo.votes.length}</p>
                <p>Percentage: {optionTwoPercentage}%</p>
              </div>
            </div>
          )
        }
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
