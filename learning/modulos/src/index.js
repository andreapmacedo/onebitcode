const Planet = require('./planet')
const solarSystem = require('./solar_system')
const moment = require('moment')


const earth = new Planet("Terra", 50100000)
earth.rotate()



solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000))
solarSystem.planets.push(new Planet("Mercúrio", 78200000))
solarSystem.planets.push(new Planet("Saturno", 454856144800000))


console.log(solarSystem)

console.log(moment().format("h:mm"))