import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface BankState {
  value: number;
}

const initialState: BankState = {
  value: 0,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    bankrupt: (state) => {
      state.value = 0;
    },
  },
});

export const { deposit, withdraw, bankrupt } = bankSlice.actions;
export default bankSlice.reducer;
