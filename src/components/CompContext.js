import React,{createContext, useState} from 'react'
const CompContext=createContext()
const ContextProvider=({children})=>{
  const [auth,setAuth]=useState(false)
  return(
    <CompContext.Provider value={{auth,setAuth}}>
      {children}
    </CompContext.Provider>
  )
}
export {CompContext,ContextProvider}