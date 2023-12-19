import React, { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [name,setName] =useState()
  const [nameget,setNameget]=useState()
  useEffect(()=>{
    getnamedata()
  })

  const getnamedata= async()=>{
    await axios.get("https://sample-first.onrender.com/").then(res=>{
      setNameget(res.data)
    })
  }



  const sendnamedata= async()=>{
    await axios.post("https://sample-first.onrender.com/",{name}).then(res=>{
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