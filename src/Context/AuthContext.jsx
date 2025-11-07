import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext =createContext()



export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

const [user,setUser]=useState(null)

useEffect(()=>{
    const storedUser= localStorage.getItem("user")
    if(storedUser) {setUser(JSON.parse(storedUser))}
},[])

const Login = (userData)=>{
    localStorage.setItem("user",JSON.stringify(userData))
    setUser(userData)
}

const Logout=()=>{
    localStorage.clear()
    setUser(null)
    navigate("/login")
}


  return (
    
      <AuthContext.Provider value={{user,Login,Logout,setUser}}>
        {children}
      </AuthContext.Provider>
   
  )
}

