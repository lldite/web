import { useState } from 'react'
import { arrayBuffer } from 'stream/consumers'
import './App.css'
import Bee from './Bee'

function App() {
    return <div>
        {new Array(8).fill(null).map(n => <Bee></Bee>)}
    </div>
}

export default App