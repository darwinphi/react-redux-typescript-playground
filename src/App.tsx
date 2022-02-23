import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./app/store";
import { deposit, withdraw, bankrupt } from "./app/bankSlice";

function App() {
  const amount = useSelector((state: RootState) => state.bank.value);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{amount}</h1>
      <button onClick={() => dispatch(deposit(500))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(500))}>Withdraw</button>
      <button onClick={() => dispatch(bankrupt())}>Bankrupt</button>
    </main>
  );
}

export default App;
