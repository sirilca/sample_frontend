import React, { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [name,setName] =useState()
  const [nameget,setNameget]=useState()
  useEffect(()=>{
    getnamedata()
  })

  const getnamedata= async()=>{
    await axios.get("http://localhost:5000/").then(res=>{
      setNameget(res.data)
    })
  }



  const sendnamedata= async()=>{
    await axios.post("http://localhost:5000/",{name}).then(res=>{
      console.log(res.data)
    })

  }


  return (
    <div>
      <input type='text' onChange={e=>{setName(e.target.value)}}></input>
      <button onClick={sendnamedata}>send name</button>
      <h3>{nameget?nameget.map(obj=>{return <p key={obj._id}>{obj.name}</p>}):"no name given"}</h3>
    </div>
  )
}

export default App