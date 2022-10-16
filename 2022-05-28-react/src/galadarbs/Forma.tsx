import { useState } from 'react'

// 10. izveidojiet komponentu un ielādējiet tā ts, html failus.
// izveidojiet reģistrācijas veidlapu ar e-pasta un paroles Input
// nospiežot pogu Input vertibas ir jānotīra un jāparādās pazinojuma logam
// (neobligāti) - pārbaudiet ievades laukus (input), izmantojot regulāras izteiksmes, un atveriet jaunu logu, ja dati ir ievadīti pareizi

function Forma() {
    // useState izveido atmiņu, kuru izsauc ar sākotnējo stāvokli, kas refrešos komponentu un 0 ir initial vērtība
    let [epast, setEpast] = useState("")
    let [parole, setParole] = useState("")

    // useState(initialState: string)): [string, string => void]

    return (
        <div className="Forma">
            <style>{"input { margin: 1em; }"}</style> 
            <input placeholder="e-pasts" value={epast} onChange={event => setEpast(event.target.value)} />
            <input placeholder="parole" value={parole} type="password" onChange={event => setParole(event.target.value)} />

            <button onClick={event => { alert(`Jūs piereģistrējāties ar e-pastu ${epast}!`); setEpast(""); setParole("") }}>
                reģistrēties
            </button>

            <div>
                {epast !== "" ? <span>Jūs plānojat reģistrēties ar e-pastu: {epast}!</span> : ""}
            </div>
        </div>
    )
}

export default Forma