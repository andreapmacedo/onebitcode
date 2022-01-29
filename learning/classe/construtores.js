class SpacialStation {
    constructor(name, platarormQuantity){
        this.name = name
        this.platarormQuantity = platarormQuantity
    }
}

// Instanciando um objeto 
let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)

class Spaceship {
    constructor(name, type = "Descoberta"){
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("darwin")
let helmet = new Spaceship("helmet", "batalha")

console.log(darwin)
console.log(helmet)