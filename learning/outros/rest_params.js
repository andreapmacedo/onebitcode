function greetCrew(message, names) {
    names.forEach(name => console.log(`${message}, ${name}`)) 
}


greetCrew("seja bem-vindo", ["Arthur", "Jake", "Melissa"])


function greetCrew2(message, ...names) {
    console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`)) 
}


greetCrew2("seja bem-vindo", "Arthur", "Jake", "Melissa")