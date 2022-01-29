

let spaceships = ["Colossus", "Artemis", "Fenix"]

console.log(...spaceships)
console.log(spaceships)

let newSpaceships1 = [...spaceships, "Puller"]
let newSpaceships2 = [spaceships, "Puller"]

console.log(newSpaceships1)
console.log(newSpaceships2)


function speedUp(velocity, acceleration) {
    return velocity + acceleration
}


let spaceshipAccelerarion = [60, 10]

//let newVelocity = speedUp(60,10)
let newVelocity = speedUp(...spaceshipAccelerarion)

console.log(newVelocity)