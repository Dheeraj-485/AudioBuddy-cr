import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Home } from "../pages"
import {Cart} from "../pages"

const Allroutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
     </Routes>
    
    </>
  )
}

export default Allroutes