import React, { useContext} from "react";
import { Refuel } from "./Refuel";

import { GlobalContext } from "../context/GlobalState";

// sama kun TransactionList videossa
export const RefuelingList = () => {
    const { refuels } = useContext(GlobalContext);

    return (
        <>
        <h3>Refueling History</h3>
        <ul className="list">
            {refuels.map(refuel => ( <Refuel key={refuel.id} refuel = {refuel}/> ))}
            
        </ul>
        </>
    )
}