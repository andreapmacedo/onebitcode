import React, {fragment, useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Fragment } from 'react/cjs/react.production.min'


// Básico - cada campo
// const Form = (props) => {
//     const [name, setName] = useState ('')
//     const handleChange = (event) => setName(event.target.value);

//     const handleSubmit = event => {
//         props.addPlanet({name:name})
//         event.preventDefault();
//     }

//     return (
//         <Fragment>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input id="name" type="text" value={name} onChange={handleChange}/>
//                 </div>
//                     <input type="submit"/>
                
//             </form>

//         </Fragment>
//     )
// }

// Evo 2 - Todos os campos
// const Form = (props) => {
//     const [fields, setFields] = useState ({
//         name: ''
//     })

//     const handleFieldChange = (e) => setFields({
//         ...fields,
//         [e.currentTarget.name]: e.currentTarget.value
//     });

//     const handleSubmit = event => {
//         props.addPlanet(fields)
//         event.preventDefault();
//     }

//     return (
//         <Fragment>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input id="name" type="text" value={fields.name} onChange={handleFieldChange}/>
//                 </div>
//                     <input type="submit"/>
                
//             </form>

//         </Fragment>
//     )
// }

// Evo 3 - Multiplos inputs
// const Form = (props) => {
//     const [fields, setFields] = useState ({
//         name: '',
//         description: ''
//     })

//     const handleFieldChange = (e) => setFields({
//         ...fields,
//         [e.currentTarget.name]: e.currentTarget.value
//     });

//     const handleSubmit = event => {
//         props.addPlanet(fields)
//         event.preventDefault();
//     }

//     return (
//         <Fragment>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input id="name" name='name' type="text" value={fields.name} onChange={handleFieldChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor='description'>Dscription</label>
//                     <input id="description" name='description' type="text" value={fields.description} onChange={handleFieldChange}/>
//                 </div>
//                     <input type="submit"/>
                
//             </form>

//         </Fragment>
//     )
// }


const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

// Evo 4 - Multiplos inputs
const Form = (props) => {
    const [fields, setFields] = useState (initialState)

    const handleFieldChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id="name" name='name' type="text" value={fields.name} onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor='description'>Dscription</label>
                    <input id="description" name='description' type="text" value={fields.description} onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor='link'>Link</label>
                    <input id="link" name='link' type="text" value={fields.link} onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor='img_url'>Imagem</label>
                    <input id="img_url" name='img_url' type="text" value={fields.img_url} onChange={handleFieldChange}/>
                </div>
                    <input type="submit"/>
            </form>

        </Fragment>
    )
}

export default Form;