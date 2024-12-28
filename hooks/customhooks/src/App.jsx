import React from 'react'
import useFetch from './customHooks/useFetch'

function App() {
const data =   useFetch('https://jsonplaceholder.typicode.com/users')

console.log(data)
  return (
    <div>
      {data.map((res,index)=>{

        return (

          <h4 key={res.id}>{res.id } = {res.name}</h4>
        )
      
})}
    </div>
  )
}

export default App
