import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [toggle,setTotggle] = useState(false)
  const textRef  = useRef()

  useEffect(()=>{

    if(textRef.current != null){
      const dimension =  textRef.current.getBoundingClientRect()

      textRef.current.style.paddingTop = `${dimension.height}px`;
       // console.log("useEffect run")
       console.log(dimension)
      
    }
  },[toggle])
 
 
  useLayoutEffect(()=>{

    if(textRef.current != null){
      const dimension =  textRef.current.getBoundingClientRect()

      textRef.current.style.paddingTop = `${dimension.height}px`;
       // console.log("useEffect run")
       console.log(dimension)
      
    }
  },[toggle])



  return (
    <div>
      <button  onClick={()=>setTotggle(!toggle)}>TOGGLE </button>
      {toggle && <h4 ref={textRef}> SAURABH </h4>}
      


    </div>
  )
}

export default App
