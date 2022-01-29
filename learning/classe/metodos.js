class Spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration){
        this.velocity += acceleration
    }



}




let arthemis = new Spaceship("arthemis")
let helmet = new Spaceship("helmet", "batalha")

console.log(arthemis)

arthemis.speedUp(10)
arthemis.speedUp(15)

console.log(arthemis)



