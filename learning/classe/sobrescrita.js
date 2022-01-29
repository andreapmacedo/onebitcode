class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedVelocity = maxRecomendedVelocity
        this.currentVelocity = 0
    }
    
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecomendedVelocity){
            console.log("velocidade máxima ultrapassada")
        }    
    }
}

class TransportaSpaceship {
    speedUp(){
        console.log("Naves de velocidade só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}



let transportSpaceship = new TransportaSpaceship("Transportadora", 4, 100)

transportSpaceship.speedUp(10)

//console.log(transportSpaceship) 