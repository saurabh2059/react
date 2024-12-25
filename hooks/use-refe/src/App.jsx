import React,{useEffect, useRef, useState} from 'react'


function App() {

  const[name,setName] = useState("")
 const count =useRef(0);

useEffect(()=>{
  count.current = count.current+1
})

// console.log(count.current)


function handleClick(){
  console.log("function run")
}


const inputElement = useRef()

function hi() {
  console.log(inputElement.current);
  inputElement.current.style.width = "500px";
  inputElement.current.focus(); 
}


  
  return (
    <div>
      <input type="text" onChange={(e)=> setName( e.target.value)} />
      <h1>Name = {name}</h1>
      <h1>count = {count.current }</h1>


      <h1>another use case of useref</h1>

      <input type="text" ref={inputElement} />
      <button onClick={hi}>click here</button>
    </div>
  )
}

export default App
