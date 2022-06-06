import CartComponent from "./components/CartComponent";
import TotalAmount from "./components/TotalAmount";
import WishListNotification from "./components/WishListNotification";

function App() {
	return (
		<div className='App text-slate-600'>
			<WishListNotification />
			<div className='text-center font-semibold text-3xl my-3'>
				Shopping Cart
			</div>

			{/* CONTAINER */}
			<div
				className='md:grid gap-3 mx-10'
				style={{ gridTemplateColumns: "7fr 3fr" }}
			>
				<CartComponent />
				<TotalAmount />
			</div>
		</div>
	);
}

export default App;
