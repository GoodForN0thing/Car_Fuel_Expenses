import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Expenses = () => {
    const { refuels } = useContext(GlobalContext);

    const price = refuels.map(refuel => refuel.fuelPriceInEuros);
    const totalLitres = refuels.map(refuel => refuel.fuelInLitres);
    const kilometers = refuels.map(refuel => refuel.distanceInKilometres);

  
    const euros = price
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

    
  
    // const expense = (
    //   amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    //   -1
    // ).toFixed(2);


    return (
        <div className="exp-container">
        <div>
            <h4>Total expenses and consumption</h4>
            <p>eurot: {euros}, litrat: {litres}, kilometrit: {kilometrit}</p>
        </div>
        </div>
    )
}