import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expenses } from './components/Expenses';
import { RefuelingList } from './components/RefuelingList';
import { AddFuelExpense } from './components/AddFuelExpense';

function App() {
  return (
    
    
    <div>
      <Header />
      <Balance />
      <Expenses />
      <RefuelingList />
      <AddFuelExpense />

    </div>
    
  );
}

export default App;
