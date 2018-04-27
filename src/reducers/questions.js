import { RECEIVE_QUESTIONS } from '../actions/questions';
import { MAKE_VOTE, CANCEL_VOTE, ADD_QUESTION } from '../actions/shared';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case MAKE_VOTE: {
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
    }
    case CANCEL_VOTE: {
      const { userID, questionID, option } = action;
      const newVotes = state[questionID][option].votes.filter((id) => id !== userID);

      return {
        ...state,
        [questionID]: {
          ...state[questionID],
          [option]: {
            ...state[questionID][option],
            votes: newVotes
          }
        }
      }
    }
    case ADD_QUESTION: {
      const question = {...(action.newQuestion)};
      return {
        ...state,
        [question.id]: question,
      }
    }
    default:
      return state;
  }
}
