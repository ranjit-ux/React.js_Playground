// Card.js
import React from 'react'

const Card = ({ title, name, setName }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Name state value in {title}: {name}</p>
    </div>
  )
}

export default Card
