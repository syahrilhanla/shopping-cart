import { useSelector } from "react-redux";
import { selectTemporaryAmount } from "../features/counter/shoppingCartSlice";

const TotalAmount = () => {
	const temporaryAmount = useSelector(selectTemporaryAmount);
	return (
		<div className='flex flex-col shadow shadow-lg shadow-slate-400 px-6 py-5 h-max mb-6'>
			<h3 className='text-2xl font-medium mb-4'>The total amount of</h3>
			{/* temporary amount */}
			<span className='flex flex-row justify-between w-[100%] my-2'>
				<p>Temporary amount</p>
				<p>${temporaryAmount.toFixed(2)}</p>
			</span>
			{/* Shipping */}
			<span className='flex flex-row justify-between w-[100%] my-2'>
				<p>Shipping</p>
				<p>Gratis</p>
			</span>

			{/* Total Amount of */}
			<span className='flex flex-row justify-between w-[100%] my-4'>
				<p className='font-medium w-[50%]'>
					The total amount of (including VAT)
				</p>
				<p className='font-medium'>${temporaryAmount.toFixed(2)}</p>
			</span>

			<button className='h-10 w-[100%] bg-blue-600 text-sm text-white rounded-md hover:shadow hover:shadow-md hover:shadow hover:shadow-slate-500 shadow-md  shadow-slate-400 duration-500'>
				GO TO CHECKOUT
			</button>
		</div>
	);
};

export default TotalAmount;
