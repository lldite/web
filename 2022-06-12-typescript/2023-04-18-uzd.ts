// Saņemot vienu skaitli n, atgriez skaitļu 1..n summu.
// (Ārpus for scope vajadzēs nodefinēt sumas mainīgo un to atgriezt. Pieraksti tipu “manuāli”!)

function SumToN(n: number): number {
  let array: Array<number> = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  return array.reduce((item, next) => item + next)
}
console.log("SumToN:", SumToN(5) == 15)

// Saņemot divus skaitļus end, step, atgriezt sarakstu ar skaitļiem [0, 0, step, -step, 2*step, -2*step, …]
// tā lai visi būtu mazāki par end. Piemērs: end = 6, step = 2, rezultāts = [0, 0, 2, -2, 4, -4].

function endStep(end: number, step: number): Array<number> {
  let array = []
  for (let i = 0; i < end; i++) {
    if (i * step >= end) break
    else {
      array.push(i * step, -i * step)
    }
  }
  return array
}
console.log(
  "endStep:",
  JSON.stringify(endStep(6, 2)) == JSON.stringify([0, 0, 2, -2, 4, -4])
)

// Saņemot skaitli n, atgriezt 1 ar n nullēm galā (pieņemsim, ka n <= 10).
// Piemērs: n = 5, rezultāts = 100000. (Sākumstāvoklis = 1, izmaiņa ir i = i * 10 un vai nu next vai kodu var izlaist!)

function zeros(n: number): number {
  let one = 1
  return one * Math.pow(10, n)
}
console.log("zeros: ", zeros(8) == 100000000)

// Saņemot skaitli n, atgriezt sarakstu ar n tukšiem sarakstiem. Piemērs: n = 5, rezultāts = [[], [], [], [], []].
// Visam labāk pierakstīt tipus manuāli kā vingrinājumu.
// Par nosacījumu izmantot ārpus for redzamības loka (scope) definētā saraksta garumu nevis pašu for mainīgo!

function arrays(n: number): Array<Array<any>> {
  let bigArray = []
  for (let i = 1; i <= n; i++) {
    bigArray.push([])
  }
  return bigArray
}
console.log(
  "arrays:",
  JSON.stringify(arrays(5)) == JSON.stringify([[], [], [], [], []])
)
