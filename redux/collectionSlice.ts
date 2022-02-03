import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCollections } from './actions';
const initialState = {
  pending: false,
  items: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.items=action.payload;
      state.pending = false;
    });
  },
});

export default collectionSlice.reducer;
