import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import Question from './Question';
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loggedIn, curUser } = this.props;
    return (
      <Router>
        <div className="container">
          {loggedIn === false
            ? <Login />
            : (
              <div>
                <Nav userName={curUser.name}/>
                <Route path="/" exact component={Dashboard} />
                <Route path="/add" component={AddQuestion} />
                <Route path="/question/:questionID" component={Question} />
                <Route path="/leaderboard" component={LeaderBoard} />
              </div>
            )
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  loggedIn: authedUser !== null,
  curUser: users[authedUser]
})

export default connect(mapStateToProps)(App);
