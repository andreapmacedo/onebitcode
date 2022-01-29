let spaceship = {
    name: "colossus",
    crewQuantity: 10,
    isHitched: false
}


//let {name: spaceshipName, crewQuantity: crewQuantity} = spaceship
// simplificando ainda mais quando utilizado variável do mesmo nome
let {name: spaceshipName, crewQuantity} = spaceship


// let spaceshipName = spaceship.name
// let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)



let spaceships = ["Colossus", "Artemis", "Fenix"]

let [colossus, artemis] = spaceships

console.log(colossus, artemis)