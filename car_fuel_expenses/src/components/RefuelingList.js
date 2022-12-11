import React from "react";
// sama kun TransactionList videossa
export const RefuelingList = () => {
    return (
        <>
        <h3>Refueling History</h3>
        <ul className="list">
            <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
            </li> 
        </ul>
        </>
    )
}