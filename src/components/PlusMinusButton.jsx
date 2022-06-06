import { useEffect, useState } from "react";
import {
	addPurchase,
	removePurchase,
	totalPurchase,
} from "../features/counter/shoppingCartSlice";
import { useDispatch } from "react-redux";

const PlusMinusButton = ({ itemPrice }) => {
	const [totalItem, setTotalItem] = useState(1);

	const dispatch = useDispatch();

	const addItem = () => {
		setTotalItem((prevValue) => prevValue + 1);
		dispatch(addPurchase(itemPrice));
	};
	const subtractItem = () => {
		if (totalItem > 1) {
			setTotalItem((prevValue) => prevValue - 1);
			dispatch(removePurchase(itemPrice));
		}
	};
	return (
		<div className='text-base font-medium'>
			<span>
				<button
					className='w-8 h-8 rounded-sm bg-white shadow-md shadow-slate-400 mx-2'
					onClick={subtractItem}
				>
					-
				</button>
				<span className='mx-3'>{totalItem}</span>
				<button
					className='w-8 h-8 rounded-sm bg-white shadow-md shadow-slate-400 ml-2'
					onClick={addItem}
				>
					+
				</button>
			</span>
			<p className='my-2 text-center'>(Note {totalItem} pieces)</p>
		</div>
	);
};

export default PlusMinusButton;
