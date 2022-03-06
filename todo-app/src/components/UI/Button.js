import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button className={styles.button} onClick={props.click} type={props.type}>
			{props.children}
		</button>
	)
}

export default Button;
