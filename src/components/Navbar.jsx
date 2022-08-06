import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"40px",backgroundColor:"#cecece",justifyContent:"space-around",fontSize:"25px"}}>
      <Link style={{textDecoration:"none" , color:"blue"}} to="/">Home</Link>
      <Link style={{textDecoration:"none" , color:"blue"}} to="/login">Login</Link>
      <Link style={{textDecoration:"none" , color:"blue"}} to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar