import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectNotification } from "../features/counter/shoppingCartSlice";

const WishListNotification = () => {
	const [showNotification, setShowNotification] = useState(false);
	const notificationInfo = useSelector(selectNotification);

	useEffect(() => {
		if (notificationInfo.status) {
			setShowNotification(true);
		}

		setTimeout(() => {
			setShowNotification(false);
		}, 4000);
	}, [notificationInfo]);

	return (
		<div
			className={`w-full justify-center duration-300 ${
				showNotification ? "flex" : "hidden"
			}`}
		>
			<div className='absolute w-[20%] mx-auto duration-500 top-[10%]'>
				<div className='text-white bg-red-500 rounded-md px-8 h-12 flex justify-center items-center top-18 mx-auto'>
					{notificationInfo.type === "wishlist"
						? "Saved to wishlist!"
						: "Item removed!"}
				</div>
			</div>
		</div>
	);
};

export default WishListNotification;
