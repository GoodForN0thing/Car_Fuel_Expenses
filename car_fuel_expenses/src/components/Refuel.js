import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

// videossa Transaction.js

export const Refuel = ({ refuel }) => {
const {deleteRefueling} = useContext(GlobalContext);

    const sign = refuel.amount < 0 ? '-' : '+';

    return (
        <li className={refuel.amount < 0 ? 'minus' : 'plus'}>
            { refuel.car } <span>{sign}${Math.abs(refuel.fuelPriceInEuros)}</span><button onClick={() => deleteRefueling(refuel.id) } className="delete-btn">x</button>
        </li>
    )
}