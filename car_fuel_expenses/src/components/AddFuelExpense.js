import React, { useState } from "react";
// sama kuin AddTransaction videossa

export const AddFuelExpense = () => {

    const [car, setCar] = useState('');
    const [fuelInLitres, setFuel] = useState('');
    const [fuelPriceInEuros, setPrice] = useState('');

    return (
        <>
        <h3>Add new refueling expense</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Car Name</label>
                <input type="text" value={car} onChange={(e) => setCar(e.target.value)} placeholder="Enter car name..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Quantity in litres</label>
                <input type="number" value={fuelInLitres} onChange={(e) => setFuel(e.target.value)} placeholder="Enter fuel in litres..." />
            </div>
            <div>
                <label htmlFor="fuelPrice"> Fuel Price</label>
                <input type="text" value={fuelPriceInEuros} onChange={(e) => setPrice(e.target.value)} placeholder="Enter fuel price in euros" ></input>
            </div>
            <button className="btn">Add Refueling Expense</button>
        </form>
        </>
    )
}