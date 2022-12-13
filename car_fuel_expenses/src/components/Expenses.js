import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Expenses = () => {
    const { refuels } = useContext(GlobalContext);

    const amounts = refuels.map(transaction => transaction.amount);

  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);


    return (
        <div className="exp-container">
        <div>
            <h4>Expense</h4>
            <p className="money minus">{income}</p>
        </div>
        </div>
    )
}