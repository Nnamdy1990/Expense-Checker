import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { Incomeexpenses } from "./components/Incomeexpenses";
import { Transaction } from "./components/Transaction";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./Context/Global";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Incomeexpenses />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
