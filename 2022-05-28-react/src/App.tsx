import { useEffect, useState } from 'react'
import './App.css'
import Info from './Info'
import Tabula from './Tabula'
import Veidlapa from './Veidlapa'

function App() {
  useEffect(() => {
     document.title = 'Mazie rīdzinieki'
  })

  let [section, setSection] = useState("info") // dati, kuri norāda uz lapu, kuru jārāda

  let html = (
    <div className="App">
      <div className="menu">
        <span onClick={event => setSection("info")}>info</span>
        <span onClick={event => setSection("veidlapa")}>veidlapa</span>
        <span onClick={event => setSection("tabula")}>tabula</span>
      </div>

      {section === "info" ? <Info /> : false}
      {section === "veidlapa" ? <Veidlapa /> : false}
      {section === "tabula" ? <Tabula /> : false}
    </div>
  )

  return html
}

export default App