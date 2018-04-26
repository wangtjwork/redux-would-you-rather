import React from 'react';

export default function QuestionList(props) {
  return (
    <div>
      <p>Would you rather...</p>
      <ul>
        {
          props.questions.map((question) => (
            <li key={question.id}>
              <span>{question.optionOne.text}</span>
              <button>More...</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
