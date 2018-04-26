import { getInitialData, saveQuestionAnswer } from '../utils/API';
import { receiveUsers, makeVote } from './users';
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

export function handleSaveAnswer(vote) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser: vote.userID,
      qid: vote.questionID,
      answer: vote.option
    }).then(() => {
      dispatch(makeVote(vote));
      dispatch(receiveVote(vote));
    })
  }
}
