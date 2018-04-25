import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {authedUser === null
          && <Login />
           
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

export default connect(mapStateToProps)(App);
