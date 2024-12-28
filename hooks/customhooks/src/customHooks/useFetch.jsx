import React, { useEffect, useState } from 'react'

function useFetch( url ) {


    const [response,setRespone] = useState([])

    useEffect(()=>{

        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setRespone(data));
    },[])
  return response
}

export default useFetch

// 'https://jsonplaceholder.typicode.com/users'
