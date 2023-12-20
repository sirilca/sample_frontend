import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import New from './New'
import App2 from './App2'
function App() {
  
  return (
    <div>

      <Routes>
        <Route path='/' element={<App2 />} ></Route>
        <Route path='/new' element={<New />}></Route>
      </Routes>
    </div>
  )
}

export default App