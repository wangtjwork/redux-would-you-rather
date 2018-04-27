import React, { Component } from 'react';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChangeText = (text, option) => {
    console.log(text, option);
    this.setState((prevState) => ({
      ...prevState,
      [option]: text,
    }));
  }

  render() {
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
      </div>
    )
  }
}

export default AddQuestion;
