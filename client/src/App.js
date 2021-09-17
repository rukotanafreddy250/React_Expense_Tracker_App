import React from 'react';
import {Header} from './components/Header';
import { Balances } from './components/Balances';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balances />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
