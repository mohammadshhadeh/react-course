import Modal from "../UI/Modal";


const ErrorModal = (props) => {
	return (
		<Modal errorTitle={props.title} errorMsg={props.message} click={props.click}/>
	);
};

export default ErrorModal;
