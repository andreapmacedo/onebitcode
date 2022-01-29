let velocity = 10

// sem parâmetro
const tripleVelocity = () => {
    return velocity * 3
}
console.log(tripleVelocity())


// com parâmetro
const doubleVelocity = (velocity) => {
    return velocity * 2
}
console.log(doubleVelocity(60))


// simplificada com parâmetro
const newVelocity = (velocity) => velocity * 2
console.log(newVelocity(60))


// simplificada com 1 parâmetro
const newVelocityEvo = velocity => velocity * 2
console.log(newVelocityEvo(60))


