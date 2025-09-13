import React,{useState} from 'react'
import "../assets/Counter.css"
const Counter = () => {

    const [count,setCount] = useState(0);

    function handleAddClick(){
        setCount(count+1);
    }
    function handleSubClick(){
        setCount(count-1);
    }

  return (
    <div className="container">
      <p id='para'>
        You Have clicked {count} times
      </p>
      <div className="buttons">
        <button id='btn' onClick={handleAddClick}>+</button>
        <button id='btn' onClick={handleSubClick}>-</button>
      </div>
    </div>
  )
}

export default Counter
