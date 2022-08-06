import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../redux/auth/action'

const Login = () => {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email,pass) => {
        const data = {
            email,
            password:pass
        }
        fetch('https://reqres.in/api/login',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        }).then((res) => res.json())
        .then((res) => {
            dispatch(login(res))
            console.log(res);
            navigate('/')
        })
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
      <button onClick={() => handleLogin(email,pass)}>LogIn</button>
    </div>
  )
}

export default Login