import React from 'react';

export default function User(props) {
  return (
    <div className="tweet">
      <img src={props.user.avatarURL}
        alt={`Avatar of ${props.user.name}`}
        className="avatar"
      />
      <div className="tweet-info">
        <div>
          <span>{props.user.name}</span>
        </div>
      </div>
    </div>
  )
}
