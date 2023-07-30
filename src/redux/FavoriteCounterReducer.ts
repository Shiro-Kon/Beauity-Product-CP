import { createSlice } from "@reduxjs/toolkit";

type FavoriteCounterState = {
  FavoriteCounter: number;
};

const initialState: FavoriteCounterState = {
  FavoriteCounter: 0,
};

export const FavoriteCounterSlice = createSlice({
  name: "FavoriteCounter",
  initialState,
  reducers: {
    FavoriteIncrement: (state) => {
      state.FavoriteCounter += 1;
    },
    FavoriteDecrement: (state) => {
      state.FavoriteCounter -= 1;
    },
  },
});

export const { FavoriteIncrement, FavoriteDecrement } =
  FavoriteCounterSlice.actions;

export default FavoriteCounterSlice.reducer;
