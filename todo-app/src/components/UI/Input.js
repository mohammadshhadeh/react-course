import styles from './Input.module.css';

const Input = (props) => {
	return (
		<div>
			<div className={styles.Title}>
				{props.title}
			</div>
			<div>
				<input
					type={props.type}
					name={props.name}
					placeholder={props.placeholder}
					className={styles.Input}
					// onChange={props.onChange}
					// value={props.value}
					ref={props.refToPass}
				/>
			</div>
		</div>
	);
};

export default Input;
