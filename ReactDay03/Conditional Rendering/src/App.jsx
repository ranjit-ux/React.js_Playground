import React, { useState } from 'react'
import './App.css'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
function App() {

  const [isLoggedin,setLoggedin] = useState(true)
  
  //If Else based conditional rendering
  // if(isLoggedin){
  //   return(
  //     <LogoutButton />
  //   )
  // }
  // else{
  //   return(
  //     <LoginButton />
  //   )
  // }



  //Ternery Operator based conditional rendering
  // return(
  //   <div>
  //     {isLoggedin ? <LogoutButton/> : <LoginButton/>}
  //   </div>
  // )



  //Logical Operator based conditional rendergin
  return(
    <div>
      {isLoggedin && <LogoutButton />}
    </div>
  )
}

export default App