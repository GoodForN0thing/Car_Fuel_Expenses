import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

// videossa Transaction.js

export const Refuel = ({ refuel }) => {
const {deleteRefueling} = useContext(GlobalContext);

    // const sign = refuel.amount < 0 ? '-' : '+';

    return (
        <li>
            { refuel.car } <span>{ refuel.fuelInLitres }  litres  </span>
             <span>{ refuel.distanceInKilometres }  km  </span>
             <span> {refuel.fuelPriceInEuros}  €/l  </span>
             <span>{refuel.totalPrice}  €  </span>
             <span>{ refuel.priceOfElectricity }  snt/kWh  </span><span>{ refuel.rechargeTime }  kWh  </span>
             <button onClick={() => deleteRefueling(refuel.id) } className="delete-btn">x</button>
        </li>
    )
}