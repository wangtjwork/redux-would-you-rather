import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/API';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const MAKE_VOTE = 'MAKE_VOTE';
export const CANCEL_VOTE = 'CANCEL_VOTE';
export const ADD_QUESTION = 'ADD_QUESTION';

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

function addQuestion(newQuestion) {
  return {
    type: ADD_QUESTION,
    newQuestion
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
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

export function handleAddQuestion(content) {
  return (dispatch) => {
    return saveQuestion(content)
      .then((newQuestion) => {
        dispatch(addQuestion(newQuestion))
      })
  }
}
