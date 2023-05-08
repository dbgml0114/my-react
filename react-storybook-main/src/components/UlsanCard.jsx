import React from 'react';
import PropTypes from "prop-types";
//import { BrowserRouter as Link } from "react-router-dom";

function UlsanCard({title,src,label,price}){
    return (
        <div className="card">
            <div className="img_box">
                <img src={src} alt={src} />
            </div>
            <div className="inner_box">
                <div className="_inner_top">
                <div className="labels">
                    <span className="label">{label}</span>
                </div>
                <p className="title">
                    {title}
                </p>
                <p className="price">{price}</p>
                </div>
            </div>
        </div>
    );
};


UlsanCard.propTypes = {
    //isFree : PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    src: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.string
};


export default UlsanCard;