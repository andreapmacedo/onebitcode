import React, {Fragment} from "react";

import GrayImg from "../../shared";
import DescriptionWithLink from "../../shared/description_with_link";

//import DescriptionWithLink from "../../shared/gray-img/description_with_link";


// async function getSatellites(id){
//     let response = await fetch(`http://localhost:3000/api/${id}.json`)
//     let data = await response.json();
//     return data;
// }


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



// const Planet = (props) => {
//    const names = ['a', 'b', 'c', 'd']
// //    const satellities = names.map((n) =>
// //     <li>Satélide {n}</li>
// //    )
   
//     // let title; 
//     // if(props.title_with_underline) {
//     //     title = <h4><u>{props.name}</u></h4>
//     // } else {
//     //     title = <h4>{props.name}</h4>
//     // }


//     return(
//         <div>
//             {title}
//             <DescriptionWithLink description={props.description} link={props.link}/>
//             <GrayImg img_url={props.img_url} gray={props.gray} />
//             <h4>Satélites</h4>
//             <ul>
//                 {names.map((n) =>
//                     <li>Satélide {n}</li>
//                 )}
//                 </ul>
//             {/* <ul>
//                 {satellities}
//             </ul> */}
//         </div>
//         // <div onClick={() => props.clickOnPlanet(props.name)}>
//         //     {title}
//         //     {/* <h4>{props.name}</h4> */}
//         //     {/* <p>{props.description}</p> */}
//         //     <DescriptionWithLink description={props.description} link={props.link}/>
//         //     <GrayImg img_url={props.img_url} gray={props.gray} />
//         // </div>
//     )
// }
// // const Planet = () => {
// //     return(
// //         <div>
// //             <h4>Pl fasanet list</h4>
// //             <p>Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.
// //             Em uma média ao longo do tempo, Mercúrio (e não Vênus) é o planeta mais próximo da Terra, do que os outros planetas do Sistema Solar, como demostrado em um estudo publicado em março de 2019 na revista Physics Today [en]. Segundo os pesquisadores Tom Stockman, Gabriel Monroe e Samuel Cordner, os métodos convencionais para o cálculo do "planeta mais próximo da Terra" são simples demais. Popularizou-se na ciência que Vênus seria o planeta mais próximo da Terra, por uma suposição errônea sobre a distância média entre os planetas. Um método matemático criado pelos pesquisadores, determinou que, quando se calcula a média ao longo do tempo, o vizinho mais próximo da Terra é, na verdade Mercúrio. Essa correção é relevante para mais do que apenas os vizinhos da Terra. A solução pode ser generalizada para incluir quaisquer dois corpos em órbitas aproximadamente circulares, concêntricas e coplanares. Usando o método mais preciso para estimar a distância média entre dois corpos em órbita, a conclusão foi que que essa distância é proporcional ao raio relativo das órbitas internas.[3][4]</p>
// //             <GrayImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg" />
// //             <GrayImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg" />
// //             <GrayImg img_url="https://upload.wikimedia.org/wikipedia/commons/b/b8/Internal_Structure_of_Mercury_%28pt%29.jpg" />
// //             {/* <GrayImg/> */}
// //         </div>
// //     )
// // }



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

// Evo 2
const Planet = (props) => {
    return(
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;