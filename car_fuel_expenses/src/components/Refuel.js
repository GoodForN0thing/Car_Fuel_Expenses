import React from "react";

// videossa Transaction.js

export const Refuel = ({ refuel }) => {
    return (
        <li className="minus">
            { refuel.text } <span>-$400</span><button className="delete-btn">x</button>
        </li>
    )
}