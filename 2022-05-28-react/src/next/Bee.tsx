import { useState } from 'react'
import './App.css'

function randomInt(n: number): number { // 0 .. n
    return Math.floor(Math.random() * n)
}

function Bee() {
    let [top, setTop] = useState(randomInt(window.innerHeight - 100))
    let [left, setLeft] = useState(randomInt(window.innerWidth - 100))
    return <div className="Bee">
        <div
            className="box"
            style={{top: top + "px", left: left + "px"}}
            onClick={event => {setTop(randomInt(window.innerHeight - 100)); setLeft(randomInt(window.innerWidth - 100))}}
        ></div>
    </div>
}

export default Bee