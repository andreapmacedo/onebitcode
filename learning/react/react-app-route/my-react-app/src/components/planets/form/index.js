import React, {Fragment, useState} from "react";


const initialState = {
    name:'',
    description:'',
    link: '',
    img_url: ''
}



const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    const handleFieldsChenge = (e) => setFields({
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
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChenge}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChenge}/>
                </div>
                <div>
                    <label htmlFor="description">link:</label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChenge}/>
                </div>
                <div>
                    <label htmlFor="img_url">img_url:</label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChenge}/>
                </div>
                <br />
                <input type="submit"/>
            </form>

        </Fragment>
    )
}

export default Form;