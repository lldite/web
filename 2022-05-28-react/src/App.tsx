import { useState } from 'react'
import './App.css'
import Cell from './Cell'

function App() {
  const numbers: Array<number> = Array.from(Array(10).keys()) // [0,1,2,3,...]

  let [text, setText] = useState("55")

  return (
    <div className="App">
      {
        numbers.map(y => 
          <div className="row" key={y}>
            {numbers.map(x => <div key={x}><Cell content={text} x={x} y={y} setContent={setText} /></div>)}
          </div>
        )
      }
    </div>
  )
}

export default App