import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


const App = () => {
  //  Counter is a state initialized to 0
  const [cn, setCounter] = useState(0)
  
  
  const increment = () => {
    setCounter(cn + 1)
  }
  
  const decrement = () => {
    setCounter(cn - 1)
  }
  return (
    <div >
      Counter App
      <div>
        {cn}
      </div>
      <div >
        <button onClick={increment}>Increment</button>
        <button  onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App;
