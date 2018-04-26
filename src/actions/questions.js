export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function votedByUser({userID, questionID, voteForOne}) {
  return {
    type: RECEIVE_VOTE,
    userID,
    questionID,
    option: voteForOne ? 'optionOne' : 'optionTwo'
  }
}
