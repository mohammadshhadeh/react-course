import AddUsers from './components/Users/AddUsers';
import RenderUsers from './components/Users/RenderUsers';
import { useState } from 'react'

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const appendNewUser = (props) => setUsersList(
		// the previous state value.
		// if multiple setState calls are updating the same state,
		// batching setState calls may lead to incorrect state being set
		(prevState) => [...prevState, props]
	);

	return (
		<section>
			<AddUsers addUsers={appendNewUser} />
			<RenderUsers usersList={usersList} />
		</section>
	);
};

export default App;
