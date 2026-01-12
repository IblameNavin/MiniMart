import React, { useEffect, useState } from 'react'
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

  const [user, setUser] = useState(null)
   
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"))
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if(storedUser) return setUser(storedUser)
  }, [])
  

  return (
    <>
    <Navbar/>
  <Routes>
    <Route path = "/" element = {<ProtectedRoute user = {user} > <Home/> </ProtectedRoute>}> </Route>
    <Route path = "/login" element = {<Login/>}> </Route>
    <Route path = "/signup" element = {  <SignUp/>}> </Route>
    <Route path = "/cart" element = {<ProtectedRoute user={user}> <Cart/> </ProtectedRoute>}> </Route>
  </Routes>
    </>
  )
}

