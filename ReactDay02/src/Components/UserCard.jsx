import React from 'react'
import reactimg from "../assets/react.svg"
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className="container">
      <h3 id="title">{props.name}</h3>
      <img src={reactimg} alt="image" id="user-img" />
      <p id="user-description">Description of the user</p>
    </div>
  )
}

export default UserCard;
