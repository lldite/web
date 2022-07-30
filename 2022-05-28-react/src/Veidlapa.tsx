import React from "react"

function Veidlapa() {
    let lettersOrSpace = /^[a-z ēūīāšģķļžčņ]+$/i
    let numbersOrSpace = /^[0123456789 ]+$/
    function validateRegex(event: React.ChangeEvent<HTMLInputElement>, regex: RegExp) {
        let atbilst = event.target.value.match(regex) !== null
        event.target.classList.toggle('error', !atbilst)
    }
    function iesniegt(forma: HTMLElement | null | undefined) {
        let inputi = forma ? forma.querySelectorAll("input.error") : []
        if (inputi.length >= 1) {
            alert("Anketa nav azpildīta pareizi!")
        }
        else {
            alert("Anketa veiksmīgi aizpildīta!")
        }
    }
    return <div className="Veidlapa">
        <form>
        <p>Ja vēlies adoptēt kādu no mūsu rīdziniekiem, sāc ar šīs anketas aizpildīšanu. Kad to būsim saņēmuši, sazināsimies ar tevi par turpmākām darbībām.</p>
            <h1>Dzīvnieka adopcijas anketa</h1>
            <div className="grupa">Šodienas datums (mēnesis/ diena/ gads)<input type="date" id="start" name="trip-start" value="2022-08-01"></input></div>
            <div>
                <span>Informācija par Tevi</span>
                <div className="grupa">
                    Vārds: <input className="vards" onChange={event => validateRegex(event, lettersOrSpace)}></input> 
                    Uzvārds: <input onChange={event => validateRegex(event, lettersOrSpace)}></input>
                </div>
                <div className="grupa">Telefons: +371<input onChange={event => validateRegex(event, numbersOrSpace)}></input></div>
                <div className="grupa">E-pasts: <input onChange={event => validateRegex(event, /@/)}></input></div>
            </div>
            <div>
                <span>Informācija par Tavu potenciālo labāko draugu</span>
                <div className="grupa">
                    Dzimums*: 
                    <div><input type="radio" name="dzimums"></input>Runcītis</div>
                    <div><input type="radio" name="dzimums"></input>Kaķenīte</div>
                </div>
    
                <div className="grupa">
                    Vecums: 
                    <div><input type="radio"></input>Nav svarīgi</div>
                    <div>Vēlamais vecums: <input></input></div>
                </div>
                <div className="grupa">
                    Iebildumi pret ārējām dzīves pieredzes liecībām:
                    <div><input type="radio" name="atbilde"></input>Ir</div>
                    <div><input type="radio" name="atbilde"></input>Nav</div>
                </div>
                <div className="grupa"><span>*Dzīvnieks pie Tevis nonāks sterilizēts un attārpots.</span></div>
            </div>
            <div><button onClick={event => iesniegt(event.currentTarget.parentElement?.parentElement)}>Iesniegt</button></div>
        </form>
        <style>{"html{background: #bbfaf1}"}</style>
    </div>
}

export default Veidlapa
