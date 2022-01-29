
class ResourceProcessStatin {
    constructor(name, monthyProcessedLoad) {
        this.name = name
        this.monthProcessedLoad = monthyProcessedLoad
    }
    get weeklyProcessedLoad(){
        return this.monthProcessedLoad / 4
    }

}

let resourceProcessor = new ResourceProcessStatin("Gaia", 500)

console.log(resourceProcessor.weeklyProcessedLoad)

resourceProcessor.monthProcessedLoad = 600

console.log(resourceProcessor.weeklyProcessedLoad)