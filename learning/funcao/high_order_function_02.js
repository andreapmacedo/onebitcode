

function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

// usando arrow function
let anotherVelocity1 = doubleVelocity(50, velocity => {
    console.log("outra velocidade: " + velocity)
})

// usando função tradicional
let anotherVelocity2 = doubleVelocity(50, function(velocity) {
    console.log("outra velocidade: " + velocity)
})