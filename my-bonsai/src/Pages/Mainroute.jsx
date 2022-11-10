import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Homepage from './Homepage'
const Mainroute = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/' element={<Homepage/>}></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>
    
   </Routes>
    )
}

export default Mainroute