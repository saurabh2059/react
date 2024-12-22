import React,{useState, useEffect} from 'react'

function App() {


  const [counter, setCounter] = useState(0);

  const [other,setOther] = useState(5)

  function increase(){

    setCounter(counter+1);

  }

 // useEffect(()=> { document.title = `${counter} new message !`}) // without dependency run whenerver there is change in app component
 
 // useEffect(()=> { document.title = `${counter} new message !`},[]) // with empty array  runs once when rendering then stops
 
 //useEffect(()=> { document.title = `${other} new message !`},[other]) // with dependency   runs when there is change in dependepnt variable


 useEffect(()=>{
  console.log(`${counter} run`);


  return ()=>{
    console.log(`${counter} cleared`)
  }
 },[counter])


 

  return (


    <div>
      <h1>{counter} new message </h1>
      <button onClick={increase}> increase the message</button>
      <h1>{other} new message </h1>
      <button onClick={()=> setOther(other+5)}> increase the message</button>
    </div>
  )
}

export default App
