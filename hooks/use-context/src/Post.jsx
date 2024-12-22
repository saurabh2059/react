import React,{useContext} from 'react'
import {LoginContext} from './context/LoginContextProvider'

function Post() {

    const login = useContext(LoginContext)
    console.log(login)

  return (
    <div>
      <h1>single post {login}</h1>
    </div>
  )
}

export default Post
