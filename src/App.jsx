import { useState } from 'react'
import './App.css'
import DisplayMessage from './DisplayMessage'
import DisplayRandomNum from './DisplayRandomNum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayRandomNum />
      <DisplayMessage />
    </>
  )
}




export default App
