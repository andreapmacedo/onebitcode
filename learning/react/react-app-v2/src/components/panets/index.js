import React, { Fragment } from "react";
import Planet from "./planet";


async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            planets: [ ]
        }
    }

    componentDidMount(){
        getPlanets().then(data => {
            this.setState(state => ({
               planets: data['planets'] 
            }))
        })
    }


    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    
    render(){
        return (
            <Fragment>
                <h3>Planet list</h3>
                <button onClick={this.removeLast}>Remove last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
                <hr />
                {this.state.planets.map((planet, index) =>
                <Planet 
                    id = {Planet.id}
                    name = {planet.name}
                    description = {planet.description}
                    img_url = {planet.img_url}
                    link = {planet.link}
                    key={index}
                />
                )}
            </Fragment>
        )
    }
}




// class Planets extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
            
//             planets: [
//                 {
//                     name: "Mercúrio",
//                     description : "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.",
//                     img_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg",
//                     link : "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//                 },
//                 {
//                     name : "Plutão",
//                     description : "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.",    
//                     img_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg",
//                     link : "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
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

    
//     render(){
//         return (
//             <Fragment>
//                 <h3>Planet list</h3>
//                 <button onClick={this.removeLast}>Remove last</button>
//                 <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
//                 <hr />
//                 {this.state.planets.map((planet) =>
//                 <Planet 
//                     name = {planet.name}
//                     description = {planet.description}
//                     img_url = {planet.img_url}
//                     link = {planet.link}
//                 />
//                 )}
//             </Fragment>
//         )
//     }
// }




// const Planets = () => {
//     return (
//         <Fragment>
//             <h3>Planet list</h3>
//             {/* <button onClick = {showMessage}>Show message!</button> */}
//             <button>Show message!</button>
//             <hr />
//             <Planet name="Mercúrio"
//                 // description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                 link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//                 title_with_underline = {true}
//                 gray={true}

//             // clickOnPlanet={clickOnPlanet}
//             />
//             <Planet name="Plutão"
//                 description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.
                
//                 Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]"
//                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1920px-Pluto_in_True_Color_-_High-Res.jpg"
//                 // link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//             // clickOnPlanet={clickOnPlanet}
//             // gray={true}
//             />


//         </Fragment>
//     )
// }

export default Planets;