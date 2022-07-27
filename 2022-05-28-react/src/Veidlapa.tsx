function Veidlapa() {
    return <div className="Veidlapa">
        <form>
            <h1>Dzīvnieka adopcijas anketa</h1>
            <div className="grupa">Šodienas datums <input type="date" id="start" name="trip-start" value="2022-08-01"></input></div>
            <div>
                <span>Informācija par Tevi</span>
                <div className="grupa">Vārds: <input></input> Uzvārds: <input></input></div>
                <div className="grupa">Telefons: +371<input></input></div>
                <div className="grupa">E-pasts: <input></input></div>
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
            <div><button>Iesniegt</button></div>
        </form>
        <style>{"html{background: #bbfaf1}"}</style>
    </div>
}

export default Veidlapa