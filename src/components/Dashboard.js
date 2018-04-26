import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';

class Dashboard extends Component {
  state = {
    showAnswered: false,
  }

  handleChange = (e) => {
    this.setState({
      showAnswered: e.target.value === 'true'
    })
  }

  render() {
    const { curUser, questions } = this.props;
    const { answers } = curUser;
    const showingQuestions = this.state.showAnswered === true
      ? Object.keys(answers).map(id => questions[id])
      : Object.keys(questions)
        .filter(id => !answers.hasOwnProperty(id))
        .map(id => questions[id]);

    showingQuestions.sort((a, b) => b.timestamp - a.timestamp);

    return (
      <div>
        <h3>{curUser.name}</h3>
        <img src={curUser.avatarURL} alt="User Avatar"/>
        <select onChange={this.handleChange} value={this.state.showAnswered}>
          <option value="true">Answered</option>
          <option value="false">Not Answered</option>
        </select>
        <h4>{this.state.showAnswered ? 'Answered' : 'Not Answered'}</h4>
        <QuestionList questions={showingQuestions}/>
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
