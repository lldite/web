import { useState } from 'react'
import './Matematika.css'

function Matematika() {
    // useState iedod atmiņu, kas refrešos komponentu un 0 ir initial vērtība
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    return (
        <div className="Matematika">
            <input placeholder="x" onChange={event => setX(parseInt(event.target.value))} />
            <input placeholder="y" onChange={event => setY(parseInt(event.target.value))} />

            x + y = {x} + {y} = {x + y}
        </div>
    )
}

export default Matematika