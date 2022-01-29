let spaceship = {
    name: "Fenix",
    crewQuantity : 7,
    type: "Batalha"
}

console.log(spaceship.type)


console.log(spaceship["name"])

spaceship.isHitched = false
spaceship["shieldLevel"] = 100

console.log(spaceship)


let planet = new Object()


console.log(planet)

planet.hasAtm = true
planet.sizeScale = 3

console.log(planet)