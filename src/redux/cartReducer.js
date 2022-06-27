import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const userSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addToCart: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const { addToCart } = userSlice.actions;

export default userSlice.reducer;