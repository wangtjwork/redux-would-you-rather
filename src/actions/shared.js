import { getInitialData } from '../utils/API';
import { receiveUsers } from './users';
import { receiveQuestions, receiveVote } from './questions';
import { setAuthedUser } from './authedUser';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser('johndoe'));
      })
  }
}

export function madeVote(vote) {
  return (dispatch) => {
    //dispatch(votedByUser(vote));
    dispatch(receiveVote(vote));
  }
}
