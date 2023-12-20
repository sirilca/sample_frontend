import React from 'react'
import { useNavigate } from 'react-router-dom'

function New() {
    const nav= useNavigate()
    const goback=()=>{
        nav(-1)
    }

  return (
    <div style={{height:'30em',backgroundColor:'red'}}>
        <h1>checking</h1>
        <button onClick={goback}>Gback</button>
    </div>
  )
}

export default New