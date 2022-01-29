import React, {Fragment, useState, useEffect} from "react";

import GrayImg from "../../shared";
import DescriptionWithLink from "../../shared/description_with_link";
// import Form from "/home/andre/node/react/projetos/version/planet-project/src/components/planets/planet/form/index.js";
import Form from "./form/index.js";


import './style.css'


//-----------------------------------------------------------------------------------//----------------------------------------------------------------------------

// Básico
// const Planet = () => {
//     return(
//         <div>
//             <h4> list</h4>
//             <p>Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.
//             Em uma média ao longo do tempo, Mercúrio (e não Vênus) é o planeta mais próximo da Terra, do que os outros planetas do Sistema Solar, como demostrado em um estudo publicado em março de 2019 na revista Physics Today [en]. Segundo os pesquisadores Tom Stockman, Gabriel Monroe e Samuel Cordner, os métodos convencionais para o cálculo do "planeta mais próximo da Terra" são simples demais. Popularizou-se na ciência que Vênus seria o planeta mais próximo da Terra, por uma suposição errônea sobre a distância média entre os planetas. Um método matemático criado pelos pesquisadores, determinou que, quando se calcula a média ao longo do tempo, o vizinho mais próximo da Terra é, na verdade Mercúrio. Essa correção é relevante para mais do que apenas os vizinhos da Terra. A solução pode ser generalizada para incluir quaisquer dois corpos em órbitas aproximadamente circulares, concêntricas e coplanares. Usando o método mais preciso para estimar a distância média entre dois corpos em órbita, a conclusão foi que que essa distância é proporcional ao raio relativo das órbitas internas.[3][4]</p>
//             <GrayImg/>
//         </div>
//     )
// }

// Evo 1
// const Planet = (props) => {
//     return(
//         <div>
//             <h4>{props.name}</h4>
//             <p>{props.description}</p>
//             <GrayImg img_url={props.img_url}/>
//         </div>
//     )
// }

// // Evo 2
// const Planet = (props) => {
//     return(
//         <div className="div" onClick={props.clickOnPlanet}>
//             <h4>{props.name}</h4>
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url}/>

//         </div>
//     )
// }

// Evo 3
// const Planet = (props) => {
//     return(
//         <div className="div" onClick={() => props.clickOnPlanet(props.name)}>
//             <h4>{props.name}</h4>
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url}/>

//         </div>
//     )
// }



// Evo 4
// const Planet = (props) => {
//     // vai por undeline apenas para a marcação especificada
//     let title; 
//     if(props.title_with_underline) {
//         title = <h4><u>{props.name}</u></h4>
//     } else {
//         title = <h4>{props.name}</h4>
//     }

    
//     return(
//         <div className="div">
//             {title}
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url} gray={props.gray}/>
//         </div>
//     )
// }


// Evo 5 - Renderizando multiplos components
// const Planet = (props) => {

//     // multiplos components
//     const names = ['a', 'b', 'c', 'd', 'e', 'f']
//     const satellities = names.map((n) =>
//     <li>Satélide {n}</li>
//     )



//     // vai por undeline apenas para a marcação especificada
//     let title; 
//     if(props.title_with_underline) {
//         title = <h4><u>{props.name}</u></h4>
//     } else {
//         title = <h4>{props.name}</h4>
//     }

    
//     return(
//         <div className="div">
//             {title}
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url} gray={props.gray}/>
//             {/* multiplos components */}
//             <h4>Satélites</h4>
//             <ul>
//                 {satellities}
//             </ul>
//         </div>
//     )
// }

// Evo 6 - Renderizando multiplos components com jsx
// const Planet = (props) => {

//     // multiplos components com jsx
//     const names = ['a', 'b', 'c', 'd', 'e', 'f']

//     // vai por undeline apenas para a marcação especificada
//     let title;
//     if (props.title_with_underline) {
//         title = <h4><u>{props.name}</u></h4>
//     } else {
//         title = <h4>{props.name}</h4>
//     }


//     return (
//         <div className="planet">
        
//             {title}
//             <DescriptionWithLink description={props.description} link={props.link} />
//             <GrayImg img_url={props.img_url} gray={props.gray} />
//             {/* multiplos components com jsx*/}
//             <h4>Satélites</h4>
//             <ul>
//                 {names.map((n) =>
//                     <li>Satélide {n}</li>
//                 )}
//             </ul>
//         </div>
//     )
// }



async function getSatellites(id){
    let response = await fetch(`http://localhost:3003/api/${id}.json`)
    let data = await response.json();
    return data;
}


// Evo 7 - Classe com estado e lifecycle
// class Planet extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             satellites: []
//         }
//     }

//     componentDidMount(){
//         getSatellites(this.props.id).then(data => {
//             this.setState(state => ({
//                 satellites: data['satellites']
//             }))
//         })
//     }

//     render(){
//         let title; 
//         if(this.props.title_with_underline) {
//             title = <h4><u>{this.props.name}</u></h4>
//         } else {
//             title = <h4>{this.props.name}</h4>
//         }
//         return(
//             <div>
//                 {title}
//                 <DescriptionWithLink description={this.props.description} link={this.props.link}/>
//                 <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
//                 <h4>Satélites</h4>
//                     <ul>
//                         {this.state.satellites.map((satellite, index) =>
//                             <li key={index}> {satellite.name}</li>
//                         )}
//                     </ul>
//                 <hr />
//             </div>
//         )
//     }        
// }

// Evo 8 - Usando hooks
// const Planet = (props) => {
//     const [satelittes, setSatelittes] = useState([]);
 
//     useEffect(() => {
//         getSatellites(props.id).then(data => {
//             setSatelittes(data['satelittes'])
//         })

//     },[])

    
//     let title; 
//     if(props.title_with_underline) {
//         title = <h4><u>{props.name}</u></h4>
//     } else {
//         title = <h4>{props.name}</h4>
//     }
//     return(
//         <div>
//             {title}
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url} gray={props.gray} />
//             <h4>Satélites</h4>
//                 <ul>
//                     {/* {satelittes.map((satelitte, index) =>
//                         <li key={index}> {satelitte.name}</li>
//                     )} */}
//                 </ul>
//             <hr />
//         </div>
//     )
// }

// Evo 8 - Form
const Planet = (props) => {
    const [satelittes, setSatelittes] = useState([]);
 
    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatelittes(data['satelittes'])
        })
    },[])

    const addSatellite = (new_satellite) => {
        setSatelittes([...satelittes, new_satellite])
    }

    
    let title; 
    if(props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }
    return(
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <h4>Satélites</h4>
                
                <Form addSatellite={addSatellite}/>
                
            <ul>
                {/* {satelittes.map((satelitte, index) =>
                    <li key={index}>{satelitte.name}</li>
                )} */}
            </ul>

            <hr />
        </div>
    )
}


export default Planet;

