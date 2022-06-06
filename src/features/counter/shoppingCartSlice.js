import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	temporaryAmount: 0,
	wishlist: [],
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
	notification: {
		status: false,
		type: "None",
	},
};

export const shoppingCartSlice = createSlice({
	name: "shoppingCart",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addPurchase: (state, action) => {
			state.temporaryAmount = state.temporaryAmount += action.payload;
		},
		removePurchase: (state, action) => {
			state.temporaryAmount = state.temporaryAmount -= action.payload;
		},
		totalPurchase: (state, action) => {
			state.temporaryAmount = action.payload;
		},
		addToWishlist: (state, action) => {
			state.wishlist = [...state.wishlist, action.payload];
			console.log(state.wishlist);
			state.notification = {
				...state.notification,
				status: true,
				type: "wishlist",
			};
		},
		removeItem: (state, action) => {
			const newState = state.itemData.filter(
				(item) => item.id !== action.payload
			);
			state.itemData = [...newState];
			state.notification = {
				...state.notification,
				status: true,
				type: "delete",
			};
		},
	},
});

export const {
	addPurchase,
	removePurchase,
	totalPurchase,
	addToWishlist,
	removeItem,
} = shoppingCartSlice.actions;

export const selectItemData = (state) => {
	return state.shoppingCart.itemData;
};

export const selectTemporaryAmount = (state) => {
	return state.shoppingCart.temporaryAmount;
};

export const selectNotification = (state) => {
	return state.shoppingCart.notification;
};

export default shoppingCartSlice.reducer;
