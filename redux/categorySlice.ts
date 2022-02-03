import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategories } from "./actions";
const initialState = {
  pending: false,
  items: [],
};

export const coategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
      state.pending = false;
    });
  },
});

export default coategorySlice.reducer;
