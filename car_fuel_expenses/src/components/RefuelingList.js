import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

// sama kun TransactionList videossa
export const RefuelingList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
        <h3>Refueling History</h3>
        <ul className="list">
            {transactions.map(transaction => ( <li className="minus">
                { transaction.text } <span>-$400</span><button className="delete-btn">x</button>
            </li> 
            ))}
            
        </ul>
        </>
    )
}