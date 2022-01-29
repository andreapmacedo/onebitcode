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

class TransportSpaceship extends Spaceship{
    constructor(name, maxCrew, maxRecomendedVelocity, maxLoadWeight){
        super(name, maxCrew, maxRecomendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration){

        acceleration /= 2
        console.log("Incrementando velocidade em " + acceleration+ " km/s")
        super.speedUp(acceleration)

    }

}






let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)
console.log(transportSpaceship) 

transportSpaceship.speedUp(210)

console.log(transportSpaceship) 