import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

// sama kun TransactionList videossa
export const RefuelingList = () => {
    const { refuels } = useContext(GlobalContext);

    return (
        <>
        <h3>Refueling History</h3>
        <ul className="list">
            {refuels.map(refuel => ( <li className="minus">
                { refuel.text } <span>-$400</span><button className="delete-btn">x</button>
            </li> 
            ))}
            
        </ul>
        </>
    )
}