import React, {fragment, useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Fragment } from 'react/cjs/react.production.min'

const initialState = {
    name: ''
}

// Evo 4 - Multiplos inputs
const Form = (props) => {
    const [fields, setFields] = useState(initialState);

    const handleFieldChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });
    
    const handleSubmit = event => {
        props.addSatellite(fields)
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
                <br/>
                <input type='submit'/>
            </form>
        </Fragment>
    )
}

export default Form;