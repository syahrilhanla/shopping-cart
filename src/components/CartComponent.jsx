import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectItemData,
	totalPurchase,
} from "../features/counter/shoppingCartSlice";
import CardItem from "./CardItem";

const CartComponent = () => {
	const selectedItem = useSelector(selectItemData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			totalPurchase(
				selectedItem
					.map((item) => item.price)
					.reduce((prev, current) => prev + current, 0)
			)
		);
	}, [selectedItem]);

	return (
		<div
			className={`flex flex-col shadow shadow-lg shadow-slate-400 px-3 py-4 mx-0 mb-4 md:px-4 md:mx-auto ${
				selectedItem.length < 1 && "w-full justify-center items-center"
			}`}
		>
			<div>
				{selectedItem.length > 0 && (
					<h2 className='text-2xl font-medium text-left mt-4 mb-6 ml-2 md:ml-6'>
						Cart ({selectedItem.length} Items)
					</h2>
				)}

				{/* ITEM CARD COMPONENT */}
				{selectedItem.map((itemDetail) => (
					<CardItem itemDetail={itemDetail} key={itemDetail.id} />
				))}

				{selectedItem.length < 1 && (
					<div>
						<h2 className='font-medium text-3xl'>
							Tidak ada item yang dipilih
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartComponent;
