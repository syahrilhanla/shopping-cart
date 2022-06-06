import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shoppingCartSlice from "../features/counter/shoppingCartSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		shoppingCart: shoppingCartSlice,
	},
});
