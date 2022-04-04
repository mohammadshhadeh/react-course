import { Component, createRef } from 'react';
import './Form.css';

class Form extends Component {
	constructor() {
		super();
		this.inputRef = createRef();
	}

	render() {
		const handleSubmit = (e) => {
			e.preventDefault();

			if (this.inputRef.current.value) {
				this.props.onAddList({
					id: new Date().getTime(),
					text: this.inputRef.current.value,
					isChecked: false,
				});

				this.inputRef.current.value = '';
			}
		};

		return (
			<form className="form" onSubmit={handleSubmit}>
				<input
					className="input"
					placeholder="What needs to be done?"
					ref={this.inputRef}
					type="text"
					name="text"
				/>
				<button className="submit" type="submit">
					Add
				</button>
			</form>
		);
	}
}

export default Form;
