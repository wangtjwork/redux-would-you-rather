export const RECEIVE_USERS = 'RECEIVE_USERS';
export const MAKE_VOTE = 'MAKE_VOTE';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function makeVote(vote) {
  return {
    ...vote,
    type: MAKE_VOTE
  }
}
