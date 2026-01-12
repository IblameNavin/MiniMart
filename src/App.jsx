import React from 'react'
import "./App.css"
import Home from "./pages/Home/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export const App = () => {
  return (
  <>
  <Router>
  <Routes>
    <Route path = "/" element = {<Home/>}> </Route>
    <Route path = "/login" element = {<Login/>}> </Route>
    <Route path = "/signup" element = {<SignUp/>}> </Route>
  </Routes>
  </Router>
  </>
  )
}

