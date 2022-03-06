import Card from "../UI/Card";
import Button from "./Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
	return (
		<div className={styles.Modal}>
			<div className={styles.Wrapper}>
				<Card>
					<h1>{props.errorTitle}</h1>
					<p>{props.errorMsg}</p>
					<Button click={props.click}>Continue</Button>
				</Card>
			</div>
		</div>
	);
};

export default Modal;

