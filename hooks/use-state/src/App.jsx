import React, { useState } from "react";

function App() {
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];
  // console.log(array);

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("demo");
  
  const [details, setDetails] = useState({ fname: '', lname: "" });

  function increase() {
    setCounter(counter + 1);
  }

  function nameChanger(e) {
    setName(e.target.value);
  }



  return (
    <div>

      <div className="hi">
      <input type="text" onChange={(e) => nameChanger(e)} />

      

      <h2>
        {name} has clicked {counter} times .
      </h2>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      </div>

      <hr />
      <hr />


<div className="hello">
      <input type="text" value={details.fname} onChange={(e)=> setDetails({...details, fname:e.target.value})}  />
      <input type="text" value={details.lname} onChange={(e)=> setDetails({...details, lname:e.target.value})}  />

      
      <h1>    
        {details.fname}  {details.lname} 

        <hr />

        {JSON.stringify(details)}
      </h1>
 {/* <button onClick={infoGainer(e)}>Increase</button> */}

      </div>
    </div>
  );
}

export default App;
