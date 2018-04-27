import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import Question from './Question';
import AddQuestion from './AddQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {authedUser === null
          ? <Login />
          : <AddQuestion />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

export default connect(mapStateToProps)(App);
