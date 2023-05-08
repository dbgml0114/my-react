import React from 'react';
import PropTypes from "prop-types";

function CheckBox({group,value,check,text}){

    const onChange =(e)=> console.log(e.target.value);
    
    return (
        <div className="chk_box">
            <input
            type="checkbox" 
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

CheckBox.propTypes = {
    group: PropTypes.string,
    value: PropTypes.string,
    check: PropTypes.bool,
    text: PropTypes.string
};


export default CheckBox;