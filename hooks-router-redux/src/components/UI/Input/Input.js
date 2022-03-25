import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

// https://reactjs.org/docs/react-api.html#reactforwardref
const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	const activate = () => {
		inputRef.current.focus();
	}

	// useImperativeHandle(ref, createHandle, [deps])
	useImperativeHandle(ref, () => {
		return {
			focus: activate
		}
	})

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
});

export default Input;
