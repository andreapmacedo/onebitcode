class RessourceProcessorStation {
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

 
    static calculateProcessInHours(monthlyProcessing, hous){
        return monthlyProcessing / 720 * hous
    }

}


let totalProcessing = RessourceProcessorStation.calculateProcessInHours(500, 6)

console.log(totalProcessing)


let processor = new RessourceProcessorStation("gaia", 2000)

// Nao pode ser chamado assim
//processor.calculateProcessInHours(processor.monthlyProcessing, 10)

let totalProcessed = RessourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessed)