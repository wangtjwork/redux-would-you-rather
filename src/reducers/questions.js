import { RECEIVE_QUESTIONS, RECEIVE_VOTE } from '../actions/questions';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case RECEIVE_VOTE:
      return {
        ...state,
        action.questionID: {
          ...state[action.questionID],
          [option]: {
            ...state[action.questionID][option],
            votes: curOption.votes.concat([userID])
          }
        }
      }
    default:
      return state;
  }
}
