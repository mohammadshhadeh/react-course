import Modal from '../UI/Modal';
import React from 'react';
import ReactDOM from 'react-dom';

const Error = ({ props }) => {
	return (
		<Modal
			errorTitle={props.title}
			errorMsg={props.message}
			click={props.click}
		/>
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{
				/*	Portals provide a first-class way to render children
					into a DOM node that exists outside the DOM hierarchy
					of the parent component. ReactDOM.createPortal(child, container)
				*/
			}
			{ReactDOM.createPortal(
				<Error props={props} />,
				document.getElementById('modal'),
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
