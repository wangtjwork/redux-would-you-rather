import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export function getUsers() {
  return _getUsers().then((users) => ({ users }));
}

export function getQuestions() {
  return getQuestions();
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
