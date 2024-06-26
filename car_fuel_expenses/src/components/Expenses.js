import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Expenses = () => {
    const { refuels } = useContext(GlobalContext);

    const price = refuels.map(refuel => refuel.fuelPriceInEuros);
    const totalLitres = refuels.map(refuel => refuel.fuelInLitres);
    const kilometers = refuels.map(refuel => refuel.distanceInKilometres);
    const totalPrice = refuels.map(refuel => refuel.totalPrice);
    const Elec = refuels.map(refuel => refuel.priceOfElectricity);
    const Lataus = refuels.map(refuel => refuel.rechargeTime);
    

    const sum = totalPrice
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const litres = totalLitres
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const kilometrit = kilometers
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const charge = Lataus
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    


    return (
        <div className="exp-container">
        <div>
            <h4>Total expenses and consumption</h4>
            <li className='total-expenses'><span>{sum} €</span></li>
            <li><span>{kilometrit} km</span><span>{litres} litres</span><span>{charge} kWh</span></li>
            
            <p>average expenses per 100 kilometers in euros {Math.round(sum * 100 / kilometrit)}</p>
            <p>average consumption per 100 kilometers in liters {Math.round(litres * 100 / kilometrit)}</p>
        </div>
        </div>
    )
}
