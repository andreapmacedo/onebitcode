
let spaceship = {
    name: "Fox",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
    }
    
}

console.log(spaceship)

spaceship.velocity = 0
spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
    spaceshipToSpeedUp.velocity += acceleration
}

console.log(spaceship)

spaceship.speedUp(spaceship, 10)

console.log(spaceship)

// Utilizando o this

spaceship.velocity = 0
spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
    this.velocity += acceleration
}


spaceship.speedUp(10)

console.log(spaceship)