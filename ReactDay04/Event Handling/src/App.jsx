import { useState } from 'react'
import './App.css'

function App(){
  const [writeup,setWriteup] = useState("");
  const [submitted,setSubmitted] = useState("");
  function handleChange(e){
    setWriteup(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    setSubmitted(writeup);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={writeup} />
        <button type='submit' >submit</button>
      </form>
      
      
      <p>you have written: {submitted}</p>
    </div>
  )
}

export default App
