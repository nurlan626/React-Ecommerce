import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import isEqual from "lodash/isEqual";

const initialStateValue = [];

export const userSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addToCart: (state, action) => {
      let i = 0;
      state.forEach(function (post) {
        if (isEqual(post, action.payload)) {
          i++;
        }
      });
      if (i === 0) {
        state = state.push(action.payload);
      }
    },
  },
});

export const { addToCart } = userSlice.actions;

export default userSlice.reducer;
