// 14. Šo uzdevumu var veikt 2 veidos. izvēlieties vienu un tikai vienu veidu.
// 1) izmantot Angular un Typescript
// 2) tīrs JS un html
// parādiet lapā šodienas datumu (Date.now() vai new Date()) un pievienojiet pogu, uz kuras noklikšķinot, datumam tiks pievienota viena diena

import { useState } from "react"

function Datums() {
    // let d = new Date()
    let [d, setD] = useState(new Date())

    return <div>
        {d.toString()}

        <button onClick={_ => setD(new Date(d.getTime() + 86400000))}>Add day</button>
    </div>
}

export default Datums