import React from 'react';
import  './Button.css';


function Button({text,icon}) {
    return (
        <button className="btn btn-main w-100 d-flex justify-content-between px-2"  ><span>{text}</span>{icon} </button>
    )
}

export default Button
