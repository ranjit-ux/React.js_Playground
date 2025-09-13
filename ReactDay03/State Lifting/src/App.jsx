import React, {useState} from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
    //This is parent of child Card
    //In parent -> create start, manage state, change state, sync state to all children

  const [name,setName] = useState('');

  return (
    <div>
      <Card title="Card 1" name={name} setName={setName}/>
      <p>In parent Component and Valus is: {name} </p>
      <Card title="Card 2"  name={name} setName={setName}/>
      <p>In parent Component and Valus is: {name} </p>
    </div>
  )
}

export default App
