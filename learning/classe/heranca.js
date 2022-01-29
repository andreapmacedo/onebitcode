class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedVelocity = maxRecomendedVelocity
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration 
        if(this.currentVelocity >= this.maxRecomendedVelocity) {
            console.log("Diminua ou poderá provocar danos a nave")
        }
    }

}

class BattleSpaceship extends Spaceship{
    stop () {
        this.currentVelocity = 0
        console.log("Recolhendo armas")
    }

}
class DiscoverySpaceship extends Spaceship{
    stop () {
        this.currentVelocity = 0
        console.log("Recolhendo equipamento de amostras e parando nave de descoberta")
    }

}


let darwin = new DiscoverySpaceship("darwin", 10, 200)
let fenix = new BattleSpaceship("fenix", 8, 240)

console.log(darwin)
console.log(fenix)


darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()