import { useState, useRef } from 'react';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';
import ErrorModal from './ErrorModal';

const AddUsers = (props) => {
	// useRef returns a mutable ref object whose .current
	// property is initialized to the passed argument (initialValue).
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState(null);

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setAge(event.target.value);
	};

	const clearError = () => {
		setError(null);
	};

	const isValidInput = () => {
		if (!nameInputRef.current.value) {
			setError({
				title: 'Username Invalid',
				message: 'Please Enter a valid username',
			});

			return true;
		}

		if (ageInputRef.current.value < 10) {
			setError({
				title: 'Age Invalid',
				message: 'Please Enter a valid Age number',
			});

			return true;
		}
	};

	const addNewUserHandler = (event) => {
		event.preventDefault();

		if (!isValidInput()) {
			props.addUsers({
				age: ageInputRef.current.value,
				username: nameInputRef.current.value,
				id: new Date().getTime(),
			});

			nameInputRef.current.value = '';
			ageInputRef.current.value = '';
			// setUsername('')
			// setAge('')
		}
	};

	return (
		<Card>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					click={clearError}
				/>
			)}
			<form onSubmit={addNewUserHandler}>
				<Input
					title='Username'
					type='text'
					name='username'
					// value={username}
					placeholder='Enter a username'
					// onChange={usernameHandler}
					refToPass={nameInputRef}
				/>
				<Input
					title='Age (Years)'
					type='number'
					name='age'
					// value={age}
					placeholder='Enter an age'
					// onChange={ageHandler}
					refToPass={ageInputRef}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUsers;
