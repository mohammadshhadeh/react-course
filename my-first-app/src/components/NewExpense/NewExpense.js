import { useState } from 'react';

import './NewExpense.css';

const NewExpense = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<div className='new-expense'>
			<form className='new-expense__controls' onSubmit={submitHandler}>
				<div className='new-expense__control'>
					<label htmlFor=''>Title</label>
					<input
						type='text'
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default NewExpense;
