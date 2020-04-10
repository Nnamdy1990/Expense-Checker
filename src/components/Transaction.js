import React, { useContext } from "react";
import Transactions from "../components/Transactions";
import { GlobalContext } from "../Context/Global";

export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transactions={transaction} />
        ))}
      </ul>
    </>
  );
};
