import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function App2() {
  const [name,setName] =useState()
  const [nameget,setNameget]=useState()
  const nav = useNavigate()
  useEffect(()=>{
    // getnamedata()
  })

  const getnamedata= async()=>{
    await axios.get("https://sample-first.onrender.com/").then(res=>{
      setNameget(res.data)
    })
  }
 
  const gotonew = () => {
    nav('/new')

  }




  const sendnamedata= async()=>{
    await axios.post("https://sample-first.onrender.com/",{name}).then(res=>{
      console.log(res.data)
    })

  }


  return (
    <div>
      {/* <input type='text' onChange={e=>{setName(e.target.value)}}></input>
      <button onClick={sendnamedata}>send name</button>
      <h3>{nameget?nameget.map(obj=>{return <p key={obj._id}>{obj.name}</p>}):"no name given"}</h3> */}
      <button onClick={gotonew}>go to new page</button>

    </div>
  )
}

export default App2