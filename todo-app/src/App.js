import AddUsers from "./components/Users/AddUsers";
import RenderUsers from "./components/Users/RenderUsers";
import { useState } from 'react'

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const appendNewUser = (props) =>
    setUsersList((prevState) => [...prevState, props]);

	return (
		<section>
      <AddUsers addUsers={appendNewUser} />
      <RenderUsers usersList={usersList} />
		</section>
	);
};

export default App;
