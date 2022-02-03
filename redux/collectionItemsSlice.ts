import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fethCollectionItems } from './actions';
const initialState = {
  pending: false,
  items: [],
};

export const collectionItemsSlice = createSlice({
  name: 'collectionItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fethCollectionItems.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fethCollectionItems.fulfilled, (state, action) => {
      state.items=action.payload;
      state.pending = false;
    });
  },
});

export default collectionItemsSlice.reducer;
