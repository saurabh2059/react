import React from 'react'
import { useState , useMemo } from 'react'

function App() {

  const [number , setNumber] = useState(0);
  const [dark,  setDark] = useState(false);
  // const calculation = expensive(number);

  const calculatedMEMO = useMemo( ()=>{

     return expensive(number)
     
  },[number])

  const css ={

    backgroundColor : dark? "black":"white",
    color : dark? "white":"black"

  }



  return (
    <div style={css}>

      <input type="number"  onChange={(e)=> {setNumber(e.target.valueAsNumber)}} value={number} />
      <h2>CALCULATIO :{calculatedMEMO} {}</h2>
      <button onClick={()=> setDark(!dark)}> TOGGLE </button>
    </div>
  )
}

function expensive(num){
  console.log("loop started")
  for(let i = 0 ; i<1000000000;i++){

  }
  return num;
}
export default App

