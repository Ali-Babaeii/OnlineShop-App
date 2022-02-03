import { createAsyncThunk } from '@reduxjs/toolkit';

export const fethCollectionItems = createAsyncThunk('collectionItems', async () => {
  const response = await fetch(
    `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=winter2020&tag=sports`
  );
  return response.json().then((data) => {
    data.forEach((x) => (x.height = Math.round(Math.random() * 200 + 150)));
    return data;
  });
});
export const fetchCollections = createAsyncThunk('collections', async () => {
  const response = await fetch(
    `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/collections`
  );
  return response.json().then((data) => {
    return data;
  });
});
export const fetchCategories = createAsyncThunk('categories', async () => {
  const response = await fetch(
    `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/categories`
  );
  return response.json().then((data) => {
    return data;
  });
});
