import React from 'react'
import { useState , useMemo } from 'react'
import PrintTable from './PrintTable';
import { useCallback } from 'react';

function App() {

  const [number , setNumber] = useState(1);
  const [dark,  setDark] = useState(false);
 

  const css ={

    backgroundColor : dark? "black":"white",
    color : dark? "white":"black"

  }

  const calculateTable = useCallback( () => {
    return [number*1, number*2, number*3, number*4, number*5];
  },[number])





  return (
    <div style={css}>

      <input type="number"  onChange={(e)=> {setNumber(e.target.valueAsNumber)}} value={number} />
      
        <PrintTable hi= {calculateTable} />
        <br />

      <button onClick={()=> setDark(!dark)}> TOGGLE </button>
    </div>
  )
}



export default App


