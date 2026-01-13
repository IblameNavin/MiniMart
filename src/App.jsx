import React, { useState } from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home/Home.jsx"
import { Login } from "./pages/Login/Login.jsx"
import { SignUp } from "./pages/Signup/SignUp.jsx"
import { Cart } from "./pages/Cart/Cart.jsx"
import {ProtectedRoute} from "./auth/ProtectedRoute.jsx"
import {PublicRoute} from "./auth/PublicRoute.jsx"
import Navbar from './components/Navbar/Navbar'


export const App = () => {

  const [user, setUser] = useState(()=>{
     return JSON.parse(localStorage.getItem("currentUser")) || null
  })
   
  
  

  return (
    <>
    <Navbar user = {user} setUser = {setUser} />
  <Routes>
    <Route path = "/" element = {<ProtectedRoute user = {user} > <Home user = {user} /> </ProtectedRoute>}> </Route>
    <Route path = "/login" element = {<Login setUser = {setUser} />}> </Route>
    <Route path = "/signup" element = {  <SignUp setUser = {setUser}/>}> </Route>
    <Route path = "/cart" element = {<ProtectedRoute user={user}> <Cart/> </ProtectedRoute>}> </Route>
  </Routes>
    </>
  )
}

