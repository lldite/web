import { useState } from 'react'
import './App.css'

function App() {
  let [x, setX] = useState(0)
  // x: number
  // setX: number => void

  return (
    <div className="App">
      <span className="minus" onClick={click => setX(x - 1)}>-</span>
      <span className="number">{x}</span>
      <span className="plus" onClick={click => setX(x + 1)}>+</span>
    </div>
  )
}

export default App