import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// sama kuin AddTransaction videossa

export const AddFuelExpense = () => {

    const [car, setCar] = useState('');
    const [fuelInLitres, setFuel] = useState('');
    const [fuelPriceInEuros, setPrice] = useState('');
    const [distanceInKilometres, setDistance] = useState('');

    const {addRefueling} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newRefueling = {
            id: Math.floor(Math.random() * 100000000),
            car,
            fuelPriceInEuros: +fuelPriceInEuros
            
            
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
            <div>
                <label htmlFor="price">Fuel Price per litre</label>
                <input type="text" value={fuelPriceInEuros} onChange={(e) => setPrice(e.target.value)} placeholder="Enter fuel price in euros" ></input>
            </div>
            <div>
                <label htmlFor="distance">Distance in kilomtres</label>
                <input type="number" value={distanceInKilometres} onChange={(e) => setDistance(e.target.value)} placeholder="Enter distance in kilometres"></input>
            </div>
            <button className="btn">Add Refueling Expense</button>
        </form>
        </>
    )
}