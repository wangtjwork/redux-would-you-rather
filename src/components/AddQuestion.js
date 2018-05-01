import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChangeText = (text, option) => {
    this.setState((prevState) => ({
      ...prevState,
      [option]: text,
    }));
  }

  handleSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { authedUser, onSubmit } = this.props;

    onSubmit({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then(() => {
      this.setState({
        toHome: true
      })
    })
    .catch(() => {
      alert('Add Question failed, wait some time before resume.');
    })
  }

  render() {
    const {optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <h2>Add Question</h2>
        <h3>Would you rather...</h3>
        <input type='text' placeholder="Option One"
          value={this.state.optionOneText}
          onChange={(e) => this.handleChangeText(e.target.value, 'optionOneText')}
        />
        <input type='text' placeholder="Option Two"
          value={this.state.optionTwoText}
          onChange={(e) => this.handleChangeText(e.target.value, 'optionTwoText')}
        />
        <button disabled={optionOneText.length === 0 || optionTwoText.length === 0}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newQuestion) => {
      return dispatch(handleAddQuestion(newQuestion));
    }
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
