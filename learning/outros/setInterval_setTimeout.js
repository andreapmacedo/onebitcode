setTimeout(() => {
    console.log("Executou após 2 segundos")
}, 2000)

let timeoutId = setTimeout(() => {
    console.log("Executou após 2 segundos")
}, 2000)


clearTimeout(timeoutId)

setInterval(() => {
    console.log("Executou após 2 segundos")
}, 2000)

let seconds = 0
let intervalId = setInterval(() => {
    seconds +=2
    console.log("Executou após 2 segundos")
    if(seconds >= 10) clearInterval(intervalId)
}, 2000)

