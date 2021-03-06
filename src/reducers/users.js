import { RECEIVE_USERS } from '../actions/users';
import { MAKE_VOTE, CANCEL_VOTE, ADD_QUESTION } from '../actions/shared';

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case MAKE_VOTE: {
      const { userID, questionID, option } = action;
      return {
        ...state,
        [userID]: {
          ...state[userID],
          answers: {
            ...state[userID]['answers'],
            [questionID]: option
          }
        }
      }
    }
    case CANCEL_VOTE: {
      const { userID, questionID } = action;
      return {
        ...state,
        [userID]: {
          ...state[userID],
          answers: state[userID].answers.filter((answer) => answer.id !== questionID)
        }
      }
    }
    case ADD_QUESTION: {
      const { author, id } = action.newQuestion;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    }
    default:
     return state;
  }
}
