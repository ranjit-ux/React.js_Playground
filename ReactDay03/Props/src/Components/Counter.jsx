import React from 'react'

const Counter = (props) => {
  return (
    <div>
        <button onClick={props.increaseCount}>
            {props.text}
        </button>
    </div>
  )
}

export default Counter
