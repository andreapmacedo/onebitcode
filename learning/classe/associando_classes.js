class Captain {
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours

    }
}


class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
        
    }
}


let spaceship = new Spaceship("Arthemis", 13, "Will Gray", 45, 1500)

console.log(spaceship)