import React, { useState,useEffect } from 'react'
import './App.css'

function App(){

  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  const [total,setTotal] = useState(0);
  function handleTotal(){
    setTotal(total+1);
  }

  //variation 1 ==> Runs on every render

  // useEffect(()=>{
  //   alert("Runs on every render");
  // })


  //variation 2 ==> Runs on only first render

  // useEffect(()=>{
  //   alert("Render on only first render");
  // },[])


  //variation 3 ==> Run when update

  // useEffect(()=>{
  //   alert("Run everytime when count will updated")
  // },[count])


  //variation 4 ==> Multiple dependencies

  // useEffect(()=>{
  //   alert("Update occur");
  // },[count,total])

  
  //variatoin 5 ==> Add a clean-up function 

  // useEffect(()=>{ 
  //   alert("Count is updated") 

  //   return ()=>{
  //     alert("Count is unmounted from UI");
  //   }
  // },[count])

  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <p>{count}</p>
      <hr />
      <button onClick={handleTotal}>Update Total</button>
      <p>{total}</p>
    </div>
  )
}

export default App;