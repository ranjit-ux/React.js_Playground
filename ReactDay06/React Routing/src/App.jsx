import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]
);

const App = () => {
  return (
    <div>
      <ul>
        <li><link to="/" />Home</li>
        <li><link to="/about" />About</li>
        <li><link to="/dashboard" />Dashboard</li>
      </ul>
    </div>
  )
}

export default App
