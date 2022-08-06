import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';


const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)
    useEffect(() => {
        handleFetch()
    }, [])
    const handleFetch = () => {
        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }
    // console.log("data", data)


    const handleCart = (product_id, count,title,price) => {
        const data = {
            product_id,
            quantity: count,
            title,
            price
        }
        fetch(`http://localhost:8080/cart`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(1))
    }
    return (
        <div>
            {
                <div>
                    <h1>{data.title}</h1>
                    <img src={data.image} alt="poster" />
                    <h3>Brand: {data.brand}</h3>
                    <h4>category: {data.category}</h4>
                    <h4>Price: {data.price}</h4>
                    <div style={{display:"flex",marginLeft:"40%",gap:"100px"}}>
                        <div style={{height:"50px",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}><button onClick={() => setCount(count+1)}>+</button> <h1> {count} </h1> <button onClick={() => setCount(count-1)}>-</button></div>
                        <Button variant="contained" onClick={() => handleCart(data.id, count,data.title,data.price)}>ADD TO CART</Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetail