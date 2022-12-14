import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const entereAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			entereAmountNumber < 1 ||
			entereAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(entereAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button type="submit">+ Add</button>
			{!amountIsValid && <p>Not Valid!!</p>}
		</form>
	);
};

export default MealItemForm;
