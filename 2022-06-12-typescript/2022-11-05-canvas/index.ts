// compile me with `npx tsc -w index.ts` ("-w(atches)" / reacts to changes in this file)

const canvas: HTMLCanvasElement = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

// alpha values from 0 (transparent to 1 opaque
// ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // red, green, blue, alpha (transparency)
// ctx.fillRect(10, 10, 500, 50) // x of left side of rect, y of left side of rect, width, height

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

// first()
// piramidas()

function klucEqualDiagonal(n: number): void {
    for (let i = 1; i <= n; i++) {
        ctx.fillRect(100 * i, 100 * i, 20, 20)
    }
}

// klucEqualDiagonal(5)

// a is not included in the sum
// e.g. sumFrom1ToN(5) = 1+2+3+4
function sumFrom1ToN(a: number): number {
    return Array.from(Array(a).keys()).reduce((a, b) => a + b)
}
console.log('sumFrom1ToN', sumFrom1ToN(1), sumFrom1ToN(2) == 1, sumFrom1ToN(3) == 3, sumFrom1ToN(4) == 6)

function klucSmallToBig(n: number): void {
    for (let j = 1; j <= n; j++) {
        // ctx.fillRect(sumFrom1ToN(j), sumFrom1ToN(j), j, j)
        ctx.fillRect(j * (j - 1) / 2, j * (j - 1) / 2, j, j)
        // ctx.fillRect((10 * i) * i, (10 * i) * i, 10 * i, 10 * i)
        // klucitis([(10 * i) * i , (10 * i) * i], 10 * i)
    }
}

//klucSmallToBig(100)

// ctx.fillStyle = "red"
// ctx.fillRect(100, 100, 80, 80)

function chessBoard(n: number): void {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let x = 100 * j
            let y = 100 * i
            if ((j + i) % 2 == 0) {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "red"
            }

            ctx.fillRect(x, y, 100, 100)
        }
    }
}
// chessBoard(8)

function chessBoard2(n: number, size: number, start: number): void {
    // ctx.fillStyle = "black"
    // ctx.fillRect(0, 0, size, size)

    // ctx.fillStyle = "yellow"
    // ctx.fillRect(0 + size * 1, 0, size, size)

    // ctx.fillStyle = "black"
    // ctx.fillRect(0 + size * 2, 0, size, size)

    // ctx.fillStyle = "yellow"
    // ctx.fillRect(0 + size * 3, 0, size, size)

    // ctx.fillStyle = "yellow"
    // ctx.fillRect(0, 0 + size, size, size)

    // ctx.fillStyle = "black"
    // ctx.fillRect(0 + size * 1, 0 + size, size, size)

    // ctx.fillStyle = "yellow"
    // ctx.fillRect(0 + size * 2, 0 + size, size, size)

    // ctx.fillStyle = "black"
    // ctx.fillRect(0 + size * 3, 0 + size, size, size)

    // for (let i = 0; i < n; i++){
    //     for (let j = 0; j < n; j++){
    //         if ((i + j) % 2 == 0) {
    //             ctx.fillStyle = "black"
    //         } else {
    //             ctx.fillStyle = "yellow"
    //         }
    //         ctx.fillRect(start + size * i, start + size * j, size, size)
    //     }
    // }

    // cita sintakse: 
    // for (let i = 0; i < n; i++){
    //     for (let j = 0; j < n; j++){
    //         ctx.fillStyle = ((i + j) % 2 == 0) ? "black" : " yellow"
    //         ctx.fillRect(start + size * i, start + size * j, size, size)
    //     }
    // }
        
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //ctx.fillStyle = "rgb(0,0,0)"
            //let greyness = (i + j) * 5
            let greyness = Math.floor(((i + j) / (n + n)) * 255)
            ctx.fillStyle = `rgb(${greyness}, ${greyness}, ${greyness})`
            ctx.fillRect(start + size * i, start + size * j, size, size)
        }
    }
}
chessBoard2(23, 20, 0)

function gradientBoard(n: number, size: number, gaps: number = 0): void {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if ((i + j) % 7 != 0 && (i - j) % 7 != 0) {
                ctx.fillStyle = ((j + i) % 2 == 0) ? "#cccccc" : "#888888"
                ctx.fillRect(size * j, size * i, size - gaps, size - gaps)
            }
        }
    }
}
// gradientBoard(50, 15, 2)

function movingRects(): void {
    let w = 100
    setInterval(() => {
        ctx.fillRect(0 + w, 0 + w, 100, 100)
        w = w + 5
    }, 100)
}
// movingRects()

function klucInAkluc(n: number, size: number, gap: number): void {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ctx.fillStyle = "black"
            ctx.fillRect(size * j, size * i, size - gap, size - gap)
        }
    }

    // let a = Array.from(Array(n).keys())
    // for (let i = 0; i <= n - 1; i++) {
    //     a.map(item => {
    //         ctx.fillStyle = "black"
    //         ctx.fillRect(size * item, size * i, size - gap, size - gap)
    //     })
    // }
}
// klucInAkluc(4, 80, 10)

function klucRamis(n: number, size: number, gap: number): void {
    // for (let i = 0; i < n; i ++){
    //     ctx.fillStyle = "black"
    //     ctx.fillRect(size * i, size - size, size - gap, size - gap)
    //     ctx.fillRect(size - size, size * i, size - gap, size - gap)
    //     ctx.fillRect(size * i, size * (n -1), size - gap, size - gap)
    //     ctx.fillRect(size * (n - 1), size * i, size - gap, size - gap)

    // }

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) 
    //         if (i == 0 || i == n - 1) {
    //             ctx.fillStyle = "black"
    //             ctx.fillRect(size * j, size * i, size - gap, size - gap)
    //         } else {
    //             if (j == 0 || j == n - 1) {
    //                 ctx.fillStyle = "black"
    //                 ctx.fillRect(size * j, size * i, size - gap, size - gap)
    //             } else {
    //                 ctx.fillStyle = "white"
    //                 ctx.fillRect(size * j, size * i, size - gap, size - gap)
    //             }
    //         }
    // }

    let a = Array.from(Array(n).keys())
    a.map(i => {
        a.map(j => {
            if (i == 0 || i == n - 1) {
                ctx.fillStyle = "black"
                ctx.fillRect(size * j, size * i, size - gap, size - gap)
            } else {
                if (j == 0 || j == n - 1) {
                    ctx.fillStyle = "black"
                    ctx.fillRect(size * j, size * i, size - gap, size - gap)
                } else {
                    ctx.fillStyle = "red"
                    ctx.fillRect(size * j, size * i, size - gap, size - gap)
                }
            }
        })
    })
}
//klucRamis(4, 60, 10)

function klucTriangleDownLeft(n: number, size: number, gap: number): void {
    // for (let i = 0; i < n; i++) {
    //         Array.from(Array(i + 1).keys()).map(item => {
    //         ctx.fillStyle = "black"
    //         ctx.fillRect(size * item, size * i, size - gap, size - gap)
    //     })
    // }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            ctx.fillStyle = "black"
            ctx.fillRect(size * j, size * i, size - gap, size - gap)
        }
    }
}
//klucTriangleDownLeft(4, 60, 10)

function klucTriangleDownRight(n: number, size: number, gap: number): void {
    for (let i = 0; i < n; i++) {
        Array.from(Array(i + 1).keys()).map(item => {
            ctx.fillStyle = "black"
            ctx.fillRect(size * (n - 1 - item), size * i, size - gap, size - gap)
        })
    }
}
//klucTriangleDownRight(4, 60, 10)

function klucTriangleTopRight(n: number, size: number, gap: number): void {
    for (let i = 0; i < n; i++) {
        Array.from(Array(i + 1).keys()).map(item => {
            ctx.fillStyle = "black"
            ctx.fillRect(size * i, size * item, size - gap, size - gap)
        })
    }
}
//klucTriangleTopRight(4, 60, 10)

function klucTriangleTopLeft(n: number, size: number, gap: number): void {
    for (let i = n; i > 0; i--) {
        Array.from(Array(i).keys()).map(item => {
            ctx.fillStyle = "black"
            ctx.fillRect(size * item, size * (n - i), size - gap, size - gap)
        })
    }
}
//klucTriangleTopLeft(4, 60, 10)

function frame(n: number, size: number, topLeft: number): void {
    for (let i = topLeft; i < n + topLeft; i++) {
        for (let j = topLeft; j < n + topLeft; j++) {
            if (i == topLeft || i == n - 1 + topLeft) {
                ctx.fillStyle = "black"
                ctx.fillRect(size * j, size * i, size, size)
            } else {
                if (j == topLeft || j == n - 1 + topLeft) {
                    ctx.fillStyle = "black"
                    ctx.fillRect(size * j, size * i, size, size)
                } else {
                    ctx.fillStyle = "white"
                    ctx.fillRect(size * j, size * i, size, size)
                }
            }
        }
    }
}

function frameInFrame(n: number, size: number): void {
    for (let i = n; i >= 1; i = i - 4) {
        frame(i, size, (n - i) / 2)
    }

    // frame(8, 60, 2)
    // frame(4, 60, 4)
}
// frameInFrame(140, 10)

function kubikInKubik(n: number, size: number, start: number): void {
    // ctx.fillStyle = "red"
    // ctx.fillRect(start, start, size, size)

    // ctx.fillStyle = "black"
    // ctx.fillRect(start + (size/n * 1), 0 + (size/n * 1), size - (2 * (size/n)), size - (2 * (size/n)))

    // ctx.fillStyle = "red"
    // ctx.fillRect(start + (size/n * 2), 0 + (size/n * 2), size - (4 * (size/n)), size - (4 * (size/n)))

    // ctx.fillStyle = "black"
    // ctx.fillRect(start + (size/n * 3), 0 + (size/n * 3), size - (6 * (size/n)), size - (6 * (size/n)))

    // ctx.fillStyle = "red"
    // ctx.fillRect(start + (size/n * 4), 0 + (size/n * 4), size - (8 * (size/n)), size - (8 * (size/n)))

    // ctx.fillStyle = "black"
    // ctx.fillRect(start + (size/n * 5), 0 + (size/n * 5), size - (10 * (size/n)), size - (10 * (size/n)))

    ctx.fillStyle = "black"
    ctx.fillRect(start, start, size, size)

    for (let i = 1; i <= n / 2; i++) {
        if (i % 2 == 0) {
            ctx.fillStyle = "black"
            ctx.fillRect(start + (size / n * i), start + (size / n * i), size - (i * 2 * (size / n)), size - (i * 2 * (size / n)))
        } else {
            ctx.fillStyle = "red"
            ctx.fillRect(start + (size / n * i), start + (size / n * i), size - (i * 2 * (size / n)), size - (i * 2 * (size / n)))
        }
    }
}
//kubikInKubik(15, 200, 100)

// function klucInAkluc(n: number, size: number): void {
//     let a = Array.from(Array(n).keys())
//     for (let i = 0; i < n; i++) {
//         if (i == 0 || i == n - 1) {
//             a.map(nn => {
//                 ctx.fillStyle = "black"
//                 ctx.fillRect(size * nn, size * nn, size, size)
//             })
//         } else {
//             for (let j = 0; j < n; j++) {
//                 a.map(nn => {
//                     if (j == 0 || j == n - 1) {
//                         ctx.fillStyle = "black"
//                         ctx.fillRect(size * j, size * i, size, size)
//                     } else {
//                         ctx.fillStyle = "white"
//                         ctx.fillRect(size * j, size * i, size, size)
//                     }
//                 })
//             }
//         }
//     }
// }

// function klucInAkluc(n: number, size: number, gaps: number = 5): void {
//     ctx.fillStyle = "black"
//     // for (let i = 0; i < n; i++) {
//     //     ctx.fillRect(0, size * i, size - gaps, size - gaps)
//     //     ctx.fillRect(size * (n - 1), size * i, size - gaps, size - gaps)
//     //     ctx.fillRect(size * i, 0, size - gaps, size - gaps)
//     //     ctx.fillRect(size * i, size * (n - 1), size - gaps, size - gaps)
//     // }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
//                 ctx.fillRect(size * j, size * i, size - gaps, size - gaps)
//             }
//         }
//     }
// }
// klucInAkluc(80, 13, 2)