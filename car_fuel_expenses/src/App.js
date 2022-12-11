import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expenses } from './components/Expenses';
import { TransactionList } from './components/TransactionList';
import { AddFuelExpense } from './components/AddFuelExpense';

function App() {
  return (
    
    
    <div>
      <Header />
      <Balance />
      <Expenses />
      <TransactionList />
      <AddFuelExpense />

    </div>
    
  );
}

export default App;
