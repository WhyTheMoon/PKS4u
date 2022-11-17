import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
	const [show, setShow] = useState(false);
	const showHandler = () => {
		setShow(true);
	};
	const cancelHandler = () => {
		// console.log("TEST");
		setShow(false);
	};

	return (
		<CartProvider>
			{show && <Cart onCancelCart={cancelHandler} />}
			<Header onShowCart={showHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
