import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			lists: [],
		};
	}

	render() {
		const handleAddingList = ({ text, id, isChecked }) => {
			this.setState({
				lists: [
					...this.state.lists,
					{
						text,
						id,
						isChecked,
					},
				],
			});
		};

		const handleDeletingList = (id) => {
			this.setState((prevState) => {
				return {
					lists: prevState.lists.filter((list) => list.id !== id),
				};
			});
		};

		const handleCheckingList = (id) => {
			this.setState((prevState) => {
				return {
					lists: prevState.lists.filter((list) => {
						if (list.id === id) {
							list.isChecked = !list.isChecked;
						}

						return list;
					}),
				};
			});
		};

		return (
			<div className="App">
				<Form lists={this.state.lists} onAddList={handleAddingList} />
				{!!this.state.lists.length && (
					<List
						lists={this.state.lists}
						onDeleteList={handleDeletingList}
						onCheckList={handleCheckingList}
					/>
				)}
			</div>
		);
	}
}

export default App;
