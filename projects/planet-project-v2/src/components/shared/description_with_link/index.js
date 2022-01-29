import React, {Fragment} from "react";





// Básico 
const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <p><a href={props.link}>{props.link}</a></p>
        </Fragment>
    )
}

// const DescriptionWithLink = (props) => {
//     if(!props.description)
//         return null;
    
    
//     if(props.link){
//         return (    
//             <Fragment>
//                 <p>{props.description}</p>
//                 <p><a href={props.link}>{props.link}</a></p>
    
                
//             </Fragment>
//         )
//     } else {
//         return (
//             <Fragment>
//                 <p><u>{props.description}</u></p>
//             {/* <p><a href={props.link}>{props.link}</a></p> */}
//             </Fragment>               
//         )
//     }
    
// }

export default DescriptionWithLink;