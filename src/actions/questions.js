export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function receiveVote(vote) {
  return {
    ...vote,
    type: RECEIVE_VOTE,
  }
}
