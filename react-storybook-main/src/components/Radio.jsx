import React from 'react';
import PropTypes from "prop-types";

function Radio({group,value,check,text}){

    const onChange =(e)=> console.log(e.target.value);
    
    return (
        <div className="rdo_box">
            <input
            type="radio" 
            onChange={onChange} 
            value={value} 
            name={group} 
            id={value}
            defaultChecked={check}/>
            <label htmlFor={value}>
                {text}
            </label>
        </div>
    );
};

Radio.propTypes = {
    group: PropTypes.string,
    value: PropTypes.string,
    check: PropTypes.bool,
    text: PropTypes.string
};


export default Radio;