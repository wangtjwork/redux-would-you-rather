import { getInitialData, saveQuestionAnswer } from '../utils/API';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

export const MAKE_VOTE = 'MAKE_VOTE';
export const CANCEL_VOTE = 'CANCEL_VOTE';

function makeVote (vote) {
  return {
    type: MAKE_VOTE,
    ...vote
  }
}

function cancelVote(vote) {
  return {
    type: CANCEL_VOTE,
    ...vote
  }
}

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

export function handleSaveAnswer(vote) {
  return (dispatch) => {
    dispatch(makeVote(vote));
    return saveQuestionAnswer({
      authedUser: vote.userID,
      qid: vote.questionID,
      answer: vote.option
    }).catch(() => {
      dispatch(cancelVote(vote));
    })
  }
}
