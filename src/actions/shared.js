import { getInitialData } from '../utils/API';
import { receiveUsers, votedAQuestion } from './users';
import { receiveQuestions, votedByUser } from './questions';
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
  dispatch(votedByUser(vote));
  dispatch(votedAQuestion(vote));
}
