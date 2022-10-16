// 12. izmantojiet ngFor un ngIf, lai parādītu sarakstu (<ul> vai <ol>) ar 100 cipariem, izņemot tos, kas dalās ar 11 vai 25.
// Pievienojiet tikai html failu
// pēc izvēles — nokrāsojiet visus pāra skaitļus sarkanā krāsā

function List() {
    let numbers = Array.from(Array(100).keys()).filter(c => !(c % 11 === 0 || c % 25 === 0))

    return <div>
        {numbers.map(n => (
            <div key={n} style={n % 2 === 0 ? {color: "red"} : {}}>{n}</div>
        ))}
    </div>
}

export default List