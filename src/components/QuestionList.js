import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionList(props) {
  return (
    <div>
      <p>Would you rather...</p>
      <ul>
        {
          props.questions.map((question) => (
            <Link to={"/question/" + question.id} key={question.id}>
              <li>
                <span>{question.optionOne.text}</span>
                &nbsp;OR&nbsp;
                <span>{question.optionTwo.text}</span>
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}
