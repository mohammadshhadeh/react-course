import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// state The State snapshot used in the component re-render/re-evaluation cycle
// dispatchFn a function that can be used to dispatch a new action (trigger on update of the state)
// reducerFn (prevState, action) => newState -> function that is triggered automatically once an action is dispatched via dispatchFn
// initialState
// initFn to set the initialState

const emailReducer = (state, action) => {
	switch (action.type) {
		case 'USER_INPUT':
			return { value: action.val, isValid: action.val.includes('@') };
		case 'USER_BLUR':
			return { value: state.value, isValid: state.value.includes('@') };
		default:
			return { value: '', isValid: false };
	}
};

const passwordReducer = (state, action) => {
	switch (action.type) {
		case 'USER_INPUT':
			return { value: action.val, isValid: action.val.trim().length > 6 };
		case 'USER_BLUR':
			return {
				value: state.value,
				isValid: state.value.trim().length > 6,
			};
		default:
			return { value: '', isValid: false };
	}
};

const Login = () => {
	const ctx = useContext(AuthContext);
	const [formIsValid, setFormIsValid] = useState(false);
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: undefined,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: undefined,
	});

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;


	const emailRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		setFormIsValid(emailIsValid && passwordIsValid);
	}, [emailIsValid, formIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'USER_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'USER_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailRef.current.focus();
		} else {
			passwordRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailRef}
					id="email"
					type="email"
					isValid={emailState.isValid}
					label={'E-mail'}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordRef}
					id="password"
					type="password"
					isValid={passwordState.isValid}
					label={'Password'}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
