import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function PrintTable({ hi }) {

    const [rows,setRows] = useState([]);



    useEffect(()=>{
        console.log("PRINT TABLE RUN ")
        setRows(hi())
    },[hi])
  
  
    return rows.map((row,index)=>{
     return <p key={index}>{row}</p>
  })
}

export default PrintTable
