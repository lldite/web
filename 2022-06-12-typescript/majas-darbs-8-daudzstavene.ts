class Daudzstavene {
    adrese: string
    stavi: number
    dzivokli: number
    anno: number
    materials: string

    constructor(adrese: string, stavi: number, dzivokli: number, anno: number, materials: string) {
        this.adrese = adrese
        this.stavi = stavi
        this.dzivokli = dzivokli
        this.anno = anno
        this.materials = materials
    }

    apraksts() { 
        return `Šī ${this.anno}. gada ${this.stavi}-stāvīgā ēka no ${this.materials} ar ${this.dzivokli} dzīvokļiem atrodas ${this.adrese}.`
    }
}

let maja: Daudzstavene = new Daudzstavene("Trijādības 4a", 5, 3 * 5 * 5, 1935, "ķieģeļiem")

console.log(`Info par māju: ${maja.apraksts()}`)

/*
izveidojiet typescript failu un aprakstiet tajā klasi "daudzstāvu ēka". 
(ielādējiet failu ar klasēm un to laukiem vienā failā)
*/