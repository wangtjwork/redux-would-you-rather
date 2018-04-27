import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChangeText = (text, option) => {
    this.setState((prevState) => ({
      ...prevState,
      [option]: text,
    }));
  }

  handleSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { authedUser, dispatch } = this.props;

    dispatch(handleAddQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }));

    {/* TODO: Redirect to Dashboard*/}
  }

  render() {
    const {optionOneText, optionTwoText } = this.state;

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

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(AddQuestion);
