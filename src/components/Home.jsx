import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const [data,setData] = useState([])

    console.log("token in home" , token)
    useEffect(() => {
        if(!token){
            navigate('/login')
        }
        handleFetch()
    },[])

    const handleFetch = () => {
        fetch(`http://localhost:8080/products`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }

  return (
    <div>
      <h1>Home</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {
            data.map((el) => (
                <div style={{padding:"10px",border:"1px solid #cecece",margin:"10px"}}>
                    <img src={el.image} alt="poster" />
                    <h3>{el.title}</h3>
                    <Link to={`/${el.id}`} >More...</Link>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home