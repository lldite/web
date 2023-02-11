// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

// ============================

function first(): void {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(10, 10, 500, 50) // x, y, width, height in pixels
}

function klucitis(centrs: [number, number], n: number): void {
    ctx.fillRect(centrs[0] - n, centrs[1] - n, n * 2, n * 2)
}

function piramida(centrs: [number, number], platums: number, solis: number): void {
    for (let i = platums; i > 0; i = i - solis) {
        klucitis(centrs, i)
    }
}

function piramidas(): void {
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
    piramida([200, 200], 100, 1)
    piramida([400, 200], 70, 20)
    piramida([600, 200], 100, 10)
}

first()
// piramidas()

// https://www.google.com/search?q=clear+canvas+js

// papildu uzdevumi canvas pie tiem, kuri ir jau pierakstīti:
// 1. drawRects: iztēlojies, ka visus klucīšus šajā tu zīmēsi no viena tupļa [x, y] kā vienu pikseli uz 50x50 pikseļu grida (režģa). tas nozīmē, ka klucītim [2, 3] tu taisīsi fillRect(2*50, 3*50, 50, 50)! uzraksti funkciju, kurai iedodot sarakstu ar klucīšiem kā [x, y] tupļiem priekš 50x50 grid, tā uzzimē visus vajadzīgos klucīšus
// 2. apskaties vēlreiz to setInterval un saproti, kas notiek. paspēlējies ar tām izmaiņām un saproti, ka setInterval, gluži kā for konstrukcija, vienkārši izsauc to pašu kodu vairākkārt jeb "veido ciklu".
// 3. uztaisi, ka tev tā setInterval funkcija klucīšus zīmē, bet pirms tam nodzēš veco, radot iespaidu, ka klucītis pārvietojas
// 4. uztaisi, ka tev ir "atmiņa" ārpus tavas jaunās setInterval funkcijas, kurai iekšā ir tie tupļi/klucīši uz 50x50 režģa. tagad katrā ciklā tava funkcija 1. visus esošos uz ekrāna uzzīmē baltus (tu vari lietot funkciju no 1. uzdevuma drawRects), 2. no saraksta izņem pēdējo lietu un ieliek saraksta sākumā jaunu lietu, kas ir saraksta esošā pirmā lieta tikai +1 abiem x/y, 3. uzzīmē visus melnus (drawRects)