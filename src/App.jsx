import React from 'react'
import "./App.css"
import Todos from './components/Todos'
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <div>
      <Toaster/>
      <Todos/>
    </div>
  )
}

export default App
