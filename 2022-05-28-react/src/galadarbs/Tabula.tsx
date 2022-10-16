function Tabula() {
    type Dzimums = 'runcis' | 'kaķene'
    type Statuss = 'pieejams' | 'aizrunāts' | 'adoptēts'
    type Dzivnieks = {vards: string, bilde: string, dzimums: Dzimums, vecums: number, apraksts: string, statuss: Statuss}

    let visiDzivnieki: Array<Dzivnieks> = [
        {
            vards: "Migliņš",
            bilde: "https://images.theconversation.com/files/168121/original/file-20170505-1693-ymh4bc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
            dzimums: "runcis",
            vecums: 3/12,
            apraksts: "Jauns, dzīves nepieredzējis un pagaidām vēl bailīgs. Gaida tieši Tevi kā dzīves skolotāju un savu Guru.",
            statuss: "aizrunāts",
        },
        {
            vards: 'Zatlers',
            bilde: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDZ2lTXq_hKowK_nXmT3usuqeId0dJueFsg&usqp=CAU)',
            dzimums: 'runcis',
            vecums: 4,
            apraksts: 'Cienījams mājas kaķis. Mierīgs un nosvērts. Lieliski saplūdīs ar mājas vidi. Reti kurš ciemiņs pamanīs, ka Tev mājas ir kaķis.',
            statuss: 'pieejams',
        },
        {
            vards: 'Vārpa',
            bilde: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
            dzimums: 'kaķene',
            vecums: 1,
            apraksts: 'Jauneklīga un draiska. Vēlams, lai ir dārzs, kur Vārpai izskrieties un pamedīt tauriņus un pieneņu pūkas.  ',
            statuss: 'pieejams',
        },
        {
            vards: 'Husis',
            bilde: 'https://nutrisourcepetfoods.com/wp-content/uploads/2021/12/cat-yowl.-.jpg',
            dzimums: 'runcis',
            vecums: 3.5,
            apraksts: 'Kaķim ir divi režīmi: spēlēties uz dzīvību un nāvi vai eksistēt un skatīties griestos. Režīmi var mainīties pa nedēļām, dienām, stundām vai pat minūtēm. Esi gatavs!',
            statuss: 'pieejams',
        },
        {
            vards: 'Blaks',
            bilde: 'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/6dfd714b342b11fd?w=890&h=590&crop=1',
            dzimums: 'runcis',
            vecums: 1,
            apraksts: 'Mīlīgs un draudzīgs. Nekad neizlaiž nagus- Tava āda un mēbeles būs drošībā. Ja nespēlējas, daudz ēd- Tev noteikti būs jāuzmana bļodiņas piepildīšanas biežums. ',
            statuss: 'adoptēts',
        },
        {
            vards: 'Kāpēc',
            bilde: 'https://www.thesprucepets.com/thmb/zvUoyPPB9GTHxchSsH79b_eGm8o=/3627x3627/smart/filters:no_upscale()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
            dzimums: 'kaķene',
            vecums: 6,
            apraksts: 'Kāpēc- jo nav skaidrs iemesls viņas izmešanai no mājām. Kaķenīte ar perfektu raksturu- pieklājīga un draudzīga. Patīk rotaļas. Pati lien klēpī, bet nav pārak uzbāzīga. Patīk un ar interesi vēro bērnus.',
            statuss: 'pieejams',
        }            
    ]

    ///

    let visiDzivniekiHtml: Array<Element> = visiDzivnieki.map((dzivnieks, index) => {
        let krasa: string

        if (dzivnieks.statuss === "pieejams") {
            krasa = "green"
        } else if (dzivnieks.statuss === "aizrunāts") {
            krasa = "orange"
        } else {
            krasa = "red"
        }

        return <tr key={index}>
            <td>{dzivnieks.vards}</td>
            <td><img alt="" src={dzivnieks.bilde}></img></td>
            <td>{dzivnieks.dzimums}</td>
            <td>{dzivnieks.vecums} gad{dzivnieks.vecums === 1 ? "s" : "i"}</td>
            <td>{dzivnieks.apraksts}</td>
            <td style={{color: krasa}}><b>{dzivnieks.statuss}</b></td>
        </tr>
    })

    return <div className="Tabula">
        <p>Pie mums mājojošie mazie rīdzinieki:</p>
        <table>
            <thead>
                <tr>
                    <th>Vārds</th>
                    <th>Bilde</th>
                    <th>Dzimums</th>
                    <th>Vecums</th>
                    <th>Apraksts</th>
                    <th>Statuss</th>
                </tr>
            </thead>
            
            <tbody>{visiDzivniekiHtml}</tbody>
        </table>
        <style>{"html{background: #b6d8fa}"}</style>
    </div>
}

export default Tabula