import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
	const [btnIsHi, setBtnIsHi] = useState(false);

	const cartCtx = useContext(CartContext);

	const btnClasses = `${classes.button} ${btnIsHi ? classes.bump : ""}`;

	useEffect(() => {
		if (cartCtx.items.length === 0) return;
		setBtnIsHi(true);

		const timer = setTimeout(() => {
			setBtnIsHi(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>
				{cartCtx.items.reduce((currNumber, item) => {
					return currNumber + item.amount;
				}, 0)}
			</span>
		</button>
	);
};

export default HeaderCartButton;
