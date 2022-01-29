import { render } from "@testing-library/react";
import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import './style.css'

import Form from "./forms";


const showMessage = () => {
    console.log('Meu primeiro evento')
}

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`)
}


// Básico
// const Planets = () => {
//     return (
//         <Fragment>
//             <Planet/>
//         </Fragment>
//     )
// }

// Evo 1
// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <hr/>
//             <Planet name="Mercúrio"
//                 description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//             />
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.
//                 Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]"
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
//             />
//         </Fragment>
//     )
// }

// Evo 2
// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <hr />
//             <Planet name="Mercúrio"
//                 description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                 link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//             />
//             <hr/>
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.
//                     Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]"
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
//                 link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//             />
//         </Fragment>
//     )
// }

//evo 3
// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <button onClick={showMessage}>Show message!</button>
//             <hr />
//             <Planet name="Mercúrio"
//                 description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                 link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//             />
//             <hr />
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.
//                     Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]"
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
//                 link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//             />
//         </Fragment>
//     )
// }

//evo 4
// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <button>Show message!</button>
//             <hr />
//             <Planet name="Mercúrio"
//                 description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                 link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//                 clickOnPlanet = {clickOnPlanet}
//             />
//             <hr />
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.
//                     Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]"
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
//                 // link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//                 clickOnPlanet = {clickOnPlanet}
//             />
//         </Fragment>
//     )
// }

// evo 5
// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <button>Show message!</button>
//             <hr />
//             <Planet name="Mercúrio"
//                 // description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                 link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//                 title_with_underline={true}
//                 gray={true}
//             />
//             <hr />
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno."    
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
                
//             />
//         </Fragment>
//     )
// }


// Evo 6 Classe com estado
// class Planets extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
            
//         }
//     }
    
//     render() {
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button>Show message!</button>
//                 <hr />
//                 <Planet name="Mercúrio"
//                     description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                     img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                     link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//                     title_with_underline={true}
//                     gray={true}
//                 />
//                 <hr />
//                 <Planet name="Plutão"
//                     description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno."    
//                     img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
                    
//                 />
//             </Fragment>
//         )
//     }
// }


// Evo 7 Classe com estado
// class Planets extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             planets: [
//                 {
//                     name:"Mercúrio",
//                     description:"Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.",
//                     img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg",
//                     link:"https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//                 },
//                 {
//                     name: "Plutão",
//                     description: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.",
//                     img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg",                
//                 }
//             ]
//         }
//     }
    
//     render() {
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button>Show message!</button>
//                 <hr />
//                 <Planet 
//                     name={this.state.planets[0].name}
//                     description={this.state.planets[0].description}
//                     img_url={this.state.planets[0].img_url}
//                     link={this.state.planets[0].link}
//                     title_with_underline={true}
//                     gray={true}
//                 />
//                 <hr />
//                 <Planet
//                     name={this.state.planets[1].name}
//                     description={this.state.planets[1].description}
//                     img_url={this.state.planets[1].img_url}
//                     link={this.state.planets[1].link}               
//                 />
//             </Fragment>
//         )
//     }
// }


// Evo 7 Classe com estado
// class Planets extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             planets: [
//                 {
//                     name:"Mercúrio",
//                     description:"Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.",
//                     img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg",
//                     link:"https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//                 },
//                 {
//                     name: "Plutão",
//                     description: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.",
//                     img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg",                
//                 }
//             ]
//         }
//     }
    
//     render() {
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button>Show message!</button>
//                 <hr />
//                 {this.state.planets.map((planet) => 
//                 <Planet 
//                     name={planet.name}
//                     description={planet.description}
//                     img_url={planet.img_url}
//                     link={planet.link}
//                     // title_with_underline={true}
//                     // gray={true}
//                     />
//                 )}
//             </Fragment>
//         )
//     }
// }


// Evo 8 Classe com estado
// class Planets extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             planets: [
//                 {
//                     name:"Mercúrio",
//                     description:"Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.",
//                     img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg",
//                     link:"https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//                 },
//                 {
//                     name: "Plutão",
//                     description: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.",
//                     img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg",                
//                 }
//             ]
//         }
//     }
    
//     removeLast = () => {
//         let new_planets = [...this.state.planets]
//         new_planets.pop()
//         this.setState(state => ({
//             planets: new_planets
//         }))
//     }


//     duplicateLastPlanet = () => {
//         let last_planet = this.state.planets[this.state.planets.length - 1]
//         this.setState(state => ({
//             planets: [...this.state.planets, last_planet]
//         }))
//     }


//     render() {
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button onClick={this.removeLast}>Remove Last</button>
//                 <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
//                 <hr />
//                 {this.state.planets.map((planet) => 
//                 <Planet 
//                     name={planet.name}
//                     description={planet.description}
//                     img_url={planet.img_url}
//                     link={planet.link}
//                     // title_with_underline={true}
//                     // gray={true}
//                     />
//                 )}
//             </Fragment>
//         )
//     }
// }

async function getPlanets() {

    let response = await fetch('http://localhost:3003/api/planets.json')
    let data = await response.json()
    return data;
}

// Evo 9 Lifecycle
// class Planets extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             planets: []
//         }
//     }
//     componentDidMount() {
//         getPlanets().then(data => {
//             this.setState(state => ({
//                 planets: data['planets']
//             }))
//         })
//     }
    
//     removeLast = () => {
//         let new_planets = [...this.state.planets]
//         new_planets.pop()
//         this.setState(state => ({
//             planets: new_planets
//         }))
//     }


//     duplicateLastPlanet = () => {
//         let last_planet = this.state.planets[this.state.planets.length - 1]
//         this.setState(state => ({
//             planets: [...this.state.planets, last_planet]
//         }))
//     }


//     render() {
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button onClick={this.removeLast}>Remove Last</button>
//                 <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
//                 <hr />
//                 {this.state.planets.map((planet) => 
//                 <Planet 
//                     id={planet.id}
//                     name={planet.name}
//                     description={planet.description}
//                     img_url={planet.img_url}
//                     link={planet.link}
//                     // title_with_underline={true}
//                     // gray={true}
//                     />
//                 )}
//             </Fragment>
//         )
//     }
// }


// Evo 9 - hooks
// const Planets = () => {
//     const [planets, setPlanets] = useState([]);
    

//     const removeLast = () => {
//         let new_planets = [...planets];
//         new_planets.pop();
//         setPlanets(new_planets);
//     }


//     const duplicateLastPlanet = () => {
//         let last_planet = planets[planets.length - 1];
//         setPlanets([...planets, last_planet]);
//     }


    
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <button onClick={removeLast}>Remove Last</button>
//             <button onClick={duplicateLastPlanet}>Duplicate Last</button>
//             <hr />
//             {planets.map((planet) =>
//                 <Planet
//                     id={planet.id}
//                     name={planet.name}
//                     description={planet.description}
//                     img_url={planet.img_url}
//                     link={planet.link}
//                 // title_with_underline={true}
//                 // gray={true}
//                 />
//             )}
//         </Fragment>
//     )    
// }

// Evo 9 - lifecycle com  hooks
// const Planets = () => {
//     const [planets, setPlanets] = useState([]);
    

//     const removeLast = () => {
//         let new_planets = [...planets];
//         new_planets.pop();
//         setPlanets(new_planets);
//     }


//     const duplicateLastPlanet = () => {
//         let last_planet = planets[planets.length - 1];
//         setPlanets([...planets, last_planet]);
//     }


    
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             <button onClick={removeLast}>Remove Last</button>
//             <button onClick={duplicateLastPlanet}>Duplicate Last</button>
//             <hr />
//             {planets.map((planet) =>
//                 <Planet
//                     id={planet.id}
//                     name={planet.name}
//                     description={planet.description}
//                     img_url={planet.img_url}
//                     link={planet.link}
//                 // title_with_underline={true}
//                 // gray={true}
//                 />
//             )}
//         </Fragment>
//     )    
// }


// Evo 9 - hooks
const Planets = () => {
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])


    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }



    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }


    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1];
        setPlanets([...planets, last_planet]);
    }
    
    return (
        <Fragment>
            <h3>Planet list</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLastPlanet}>Duplicate Last</button>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {planets.map((planet) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                // title_with_underline={true}
                // gray={true}
                />
            )}
        </Fragment>
    )
}



export default Planets;