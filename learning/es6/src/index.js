import Spaceship from "./spaceship";
import armamentKind from "./armaments"

// import { laserDefenses, steelDefenses } from "./defenses";
// import { laserDef, steelDefenses } from "./defenses";
// import { laserDef, steelDefenses as steelDef } from "./defenses";
import { laserDef } from "./defenses";

import basicDefense from "./defenses"


// const spaceship = new Spaceship("USS Enterprise", "James Tiberius Kirk", armamentKind.laser, laserDefenses)
const spaceship = new Spaceship("USS Enterprise", "James Tiberius Kirk", armamentKind.laser, laserDef)
const basicSpaceship = new Spaceship("Nave Básica", "Astronauta Zin", [], basicDefense)
console.log(basicSpaceship)


console.log(spaceship)