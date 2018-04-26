import { RECEIVE_QUESTIONS, RECEIVE_VOTE } from '../actions/questions';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case RECEIVE_VOTE:
      const { userID, questionID, option } = action;

      return {
        ...state,
        [questionID]: {
          ...state[questionID],
          [option]: {
            ...state[questionID][option],
            votes: state[questionID][option].votes.concat([userID])
          }
        }
      }
    default:
      return state;
  }
}
