import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import collectionSlice from "./collectionSlice";
import categorySlice from "./categorySlice";
import collectionItemSlice from "./collectionItemsSlice";

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const reducer = combineReducers({
  collection: collectionSlice,
  category: categorySlice,
  collectionItem: collectionItemSlice,
});

export const store = configureStore({
  reducer,
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
