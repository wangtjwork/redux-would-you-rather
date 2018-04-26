import { RECEIVE_USERS, MAKE_VOTE } from '../actions/users';

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case MAKE_VOTE:
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
    default:
     return state;
  }
}
