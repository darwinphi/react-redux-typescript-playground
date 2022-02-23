import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <main>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(500)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </main>
  );
}

export default App;
