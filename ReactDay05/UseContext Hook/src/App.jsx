import React,{ useState,createContext } from 'react'
import './App.css'
import ChildA from './Components/childA'
  //step 1 : Crete Context
const userContext = createContext();
function App() {

  //step 2 : wrap all the child inside a provider
  //step 3 : pass value
  //step 4 : Consume 

  const [user,setUser]=useState({name: "Ranjit"});

  return (
    <div>
      <userContext.Provider value={user}>
      <ChildA />
      </userContext.Provider>
    </div>
  )
}

export default App
export {userContext}