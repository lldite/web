function numberGrid(n: number): string {
    let ss = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ss = ss + (i + j).toString()
        }
        ss = ss + "\n"
    }
    return ss

    let newarray = []
    let s = ""
    for (let i = 0; i < n; i++) {
        newarray.push(i)
    }
    for (let j = 0; j < n; j++) {
        s = s + newarray.map((a, b) => a + j).join("") + "\n"
    }
    return s

    let na = Array.from(Array(n).keys())
    let string = ""
    for (let j = 0; j < n; j++) {
        na.map((a, b) => a + j)
        string = string + na.map((a, b) => a + j).join("") + "\n"
    }
    return string
}
console.log(numberGrid(5))

function triangle(n: number): string {
    let s = ""
    for (let i = 1; i <= n; i++) {
        s = s + Array(i).fill("*").join("") + "\n"
    }
    return s
}
console.log(triangle(4))

function triangleAndBackground(n: number): string {
    let s = ""
    for (let i = 1; i <= n; i++) {
        s = s + Array(i).fill("*").join("") + Array(n - i).fill("-").join("") + "\n"
    }
    return s
}
console.log(triangleAndBackground(4))

function eglite(n: number): string {
    let s = ""
    for (let i = 1; i <= n; i++) {
        s = s +
            Array(n - i).fill("-").join("") +
            Array((i * 2) - 1).fill("*").join("") +
            Array(n - i).fill("-").join("") +
            "\n"
    }
    return s
}
console.log(eglite(10))