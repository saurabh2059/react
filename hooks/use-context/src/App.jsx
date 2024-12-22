import React, {createContext} from 'react'
import Maincomponent from './Maincomponent'
import LoginContextProvider from './context/LoginContextProvider'



function App() {

  return (

<LoginContextProvider>

        <div>
        <Maincomponent/>
        </div>
</LoginContextProvider>

    

  )
}

export default App
