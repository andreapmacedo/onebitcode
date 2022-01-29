import React, {Fragment} from "react";
import './style.css'


const GrayImg = (props) => {
    return (
        <img className="gray-img" src={props.img_url}></img>
        // <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url}></img>
    )
}

// Básic
// const GrayImg = () => {
//     return (
//         <img class="gray-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"></img>
//         )
// }


export default GrayImg;
