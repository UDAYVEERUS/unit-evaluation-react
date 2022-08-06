import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Button from '@mui/material/Button';

const Cart = () => {
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
        handleFetch()
    },[])

    const handleFetch = () => {
      fetch(`http://localhost:8080/cart`)
      .then((res) => res.json())
      .then((res) => setData(res))
  }
  const handleDelete =(id) => {
    fetch(`http://localhost:8080/cart/${id}`,{
      method:"DELETE"
    })
    .then((res) => res.json())
    .then((res) => handleFetch())
  }
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          data.map((el) => (
            <div style={{display:"flex",gap:"100px",marginLeft:"30%"}}>
              <h2>{el.title}</h2>
              <div style={{height:"50px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}><h2 style={{color:"blue"}}>{el.quantity}</h2> </div>
              <h2 style={{color:"red"}}>Rs {el.price * el.quantity}</h2>
              <Button  variant="contained" onClick={() =>handleDelete(el.id)} style={{height:"40px"}}>Delete</Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart