import { IoMdTrash, IoMdHeart } from "react-icons/io";
import PlusMinusButton from "./PlusMinusButton";

import { useDispatch } from "react-redux";
import {
	addToWishlist,
	removeItem,
} from "../features/counter/shoppingCartSlice";

const CardItem = ({ itemDetail }) => {
	const dispatch = useDispatch();

	const handleWishlist = () => {
		dispatch(addToWishlist(itemDetail));
	};

	const handleRemoveItem = () => {
		dispatch(removeItem(itemDetail.id));
	};

	return (
		<div className='md:grid grid-cols-2 py-1 md:px-6 px-2 rounded-md my-6'>
			<div className='md:block md:w-max w-full h-[100%] flex justify-center items-center '>
				<img
					className='rounded-md shadow shadow-md shadow-slate-400'
					src={`/${itemDetail.itemPic}`}
					alt={itemDetail.displayName}
					width='180px'
				/>
			</div>
			{/* ITEM's INFO */}
			<div className='md:w-[130%] md:ml-[-30%] mt-4 md:mt-1'>
				<span className='flex justify-between'>
					<div>
						<h4 className='font-bold text-lg'>{itemDetail.displayName}</h4>
						<span className='flex flex-row gap-4 my-3'>
							<p>{itemDetail.tag}</p>
							<p>{itemDetail.color}</p>
						</span>
					</div>
					<PlusMinusButton itemPrice={itemDetail.price} />
				</span>
				<div className='my-3'>
					<p>Color: {itemDetail.color}</p>
					<p>Size: {itemDetail.size}</p>
				</div>
				<div className='flex flex-row justify-between'>
					<span className='flex flex-row justify-between w-[80%] md:w-fit md:gap-2'>
						<button
							className='flex flex-row items-center justify-center font-normal border border-white hover:border-slate-300 duration-300 py-3 md:px-2 w-fit rounded-md'
							onClick={handleRemoveItem}
						>
							<IoMdTrash className='text-xl mr-1' /> Remove Item
						</button>
						<button
							className='flex flex-row items-center justify-center font-normal border border-white hover:border-slate-300 duration-300 py-1 md:px-2 rounded-md'
							onClick={handleWishlist}
						>
							<IoMdHeart className='text-xl mr-1' /> Move to Wishlist
						</button>
					</span>
					<h2 className='text-xl font-semibold flex items-center'>
						${itemDetail.price}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
