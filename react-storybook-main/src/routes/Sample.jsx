import { useState, useEffect } from "react";
import "../components/Card.scss";
import UlsanCard from "../components/UlsanCard";

function Sample () {
    return (
        <div>
            <ul className="card_list">
                <li>
                    <UlsanCard
                    src={"https://i.pinimg.com/564x/26/4d/84/264d84335d66e9d15737d89ab4cb193a.jpg"}
                    label={"당일사용"}
                    title={"울산 왕 족발"}
                    />
                </li>
            </ul>

        </div>
    );
};

export default Sample;