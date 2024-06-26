import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// sama kuin AddTransaction videossa

export const AddFuelExpense = () => {

    const [car, setCar] = useState('');
    const [fuelInLitres, setFuel] = useState('');
    const [fuelPriceInEuros, setPrice] = useState('');
    const [distanceInKilometres, setDistance] = useState('');
    const [priceOfElectricity, setElec] = useState('');
    const [rechargeTime, setRecharge] = useState('');


    const {addRefueling} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newRefueling = {
            id: Math.floor(Math.random() * 100000000),
            car,
            fuelInLitres: +fuelInLitres,
            fuelPriceInEuros: +fuelPriceInEuros,
            distanceInKilometres: +distanceInKilometres,
            priceOfElectricity: +priceOfElectricity,
            rechargeTime: +rechargeTime,
            totalPrice: +fuelInLitres*fuelPriceInEuros + priceOfElectricity*rechargeTime

        }

        addRefueling(newRefueling);
    }

    return (
        <>
        <h3>Add new refueling expense</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="name">Car Name</label>
                <input type="text" value={car} onChange={(e) => setCar(e.target.value)} placeholder="Enter car name" />
            </div>
            
            <div className="form-control">
                <label htmlFor="amount">Quantity in litres</label>
                <input type="number" value={fuelInLitres} onChange={(e) => setFuel(e.target.value)} placeholder="Enter fuel in litres" />
            </div>
            
            <div className="form-control">
                <label htmlFor="price">Fuel Price per litre</label>
                <input type="text" value={fuelPriceInEuros} onChange={(e) => setPrice(e.target.value)} placeholder="Enter fuel price in euros" ></input>
            </div>
            <div className="form-control">
                <label htmlFor="distance">Distance in kilomtres</label>
                <input type="number" value={distanceInKilometres} onChange={(e) => setDistance(e.target.value)} placeholder="Enter distance in kilometres"></input>
            </div>
            <div className="form-control">
                <label htmlFor="sähköhinta">Price of electricity €/kWh</label>
                <input type="number" value={priceOfElectricity} onChange={(e) => setElec(e.target.value)} placeholder="Enter price of electricity"></input>
            </div>
            <div className="form-control">
                <label htmlFor="Latausaika">Recharge in kWh</label>
                <input type="number" value={rechargeTime} onChange={(e) => setRecharge(e.target.value)} placeholder="Enter recharge time"></input>
            </div>
            
            <button className="btn">Add Refueling Expense</button>
        </form>
        </>
    )
}