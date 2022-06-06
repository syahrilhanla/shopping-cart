import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	totalItem: 0,
	totalPurchase: 0,
	itemData: [
		{
			id: "1241512352",
			displayName: "Blue Denim Shirt",
			tag: "SHIRT",
			color: "BLUE",
			size: "M",
			itemPic: "blueDenim.jpg",
			price: 17.99,
		},
		{
			id: "1467134717",
			displayName: "Red Denim Jacket",
			tag: "JACKET",
			color: "RED",
			size: "L",
			itemPic: "redJacket.jpg",
			price: 35.99,
		},
	],
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			console.log(state.totalItem);
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state;

export default counterSlice.reducer;
