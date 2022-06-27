import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const userSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.find((x) => x.id === action.payload.id);
      if (!exist) {
        const item = action.payload;
        item.qty = 1;
        state = state.push(item);
      }
    },
    increaseQuantity: (state, action) => {
      state.forEach(function (item) {
        if (item.id === action.payload.id) {
          item.qty = item.qty + 1;
        }
      });
      console.log(state)
    },
  },
});

export const { addToCart, increaseQuantity } = userSlice.actions;

export default userSlice.reducer;
