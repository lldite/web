import { useState } from 'react'
import './App.css'

// return an array with `a` repeated `times` times
function fill<A>(times: number, a: A): Array<A> {
  let list: Array<A> = []
  for(let i = 0; i < times; i++) {
      list.push(a)
  }
  // init = "i = 0"
  // cond = "i < n"
  // kods = "list.push(n)"
  // next = "i++"
  return list
}

// return an array in interval 1 to `times`
function times(times: number): Array<number> {
  let list: Array<number> = []
  for(let i = 1; i <= times; i++) {
      list.push(i)
  }
  return list
}

function App() {
  let [x, setX] = useState(0)
  // x: number
  // setX: number => void

  return (
    <div className="App">
      <span className="minus" onClick={click => setX(x - 1)}>-</span>
      <span className="plus" onClick={click => setX(x + 1)}>+</span>
      <div className="number">
        {times(x).map(x => <div key={x}>{x}th block</div>)}
      </div>
    </div>
  )
}

export default App