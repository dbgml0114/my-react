import { useState } from "react";
import PropTypes from "prop-types";

function Counter ({optionName}){
    const [counter, setCounter] = useState(0);
    const minusCounter =()=> setCounter((prev) => prev - 1);
    const plusCounter =()=> setCounter((prev) => prev + 1);
    return (
        <div className="counter_box">
            <div className="lft">
                <span>{optionName}</span>
            </div>
            <div className="rgt">
                <button className="btn_count" onClick={minusCounter}>-</button>
                <span className="count">{counter}</span>
                <button className="btn_count" onClick={plusCounter}>+</button>
            </div>

        </div>
    );
};


Counter.propTypes = {
    //isFree : PropTypes.bool,
    optionName: PropTypes.string,
};

export default Counter;