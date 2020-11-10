import React from 'react';
import { Header } from './components/Header.js';
import './App.css';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState.js';
function App() {
  return (
    <GlobalProvider >
     <Header />
     <div className="contaier">

       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />

       </div>
    </GlobalProvider>
   
    

 

  );
}

export default App;
