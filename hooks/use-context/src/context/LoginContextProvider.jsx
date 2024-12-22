import React,{createContext} from 'react'
import { useState } from 'react'

export const LoginContext = createContext()

function LoginContextProvider({children}) {

    const [userDetail, setUserDetail] = useState(1)

  return (

    

    <LoginContext.Provider value={userDetail}>
        <div>
      {children}
      </div>

    </LoginContext.Provider>
    
  )
}

export default LoginContextProvider
