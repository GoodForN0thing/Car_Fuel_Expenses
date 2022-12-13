import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expenses } from './components/Expenses';
import { RefuelingList } from './components/RefuelingList';
import { AddFuelExpense } from './components/AddFuelExpense';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
    <GlobalProvider>

      <Header />
      <Expenses />
      <RefuelingList />
      <AddFuelExpense />

    </GlobalProvider>
    
  );
}

export default App;
