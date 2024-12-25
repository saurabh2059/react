import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';

const initialState = {count:0}

const reducer = (state, action)=>{
  console.log(action)

  switch (action.type ){
      case "increase":
        return {count: state.count+1}
      case "decrease":
        return {count: state.count-1}
      default:
        return state

  }

  

}

function App() {
  // const [count, setCount] = useState(0);

  const [state , dispatch ] = useReducer(reducer,initialState)

  const increaseCount = ()=>{
   dispatch({type:"increase"})
  }
  const decreaseCount = ()=>{
    dispatch({type:"decrease"})

  }
  return (
    <div>

      <h1>VAlUE = {state.count}</h1>
      <button onClick={increaseCount}>ADD</button>
      <button onClick={decreaseCount}>MINUS</button>
    </div>
  )
}

export default App
