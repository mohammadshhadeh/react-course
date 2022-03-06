import { useState } from 'react';

import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

const AddUsers = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  }

  const addNewUserHandler = (event) => {
    event.preventDefault();
    props.addUsers({
      age, username, id: new Date().getTime()
    })
  }

	return (
		<Card>
      <form onSubmit={addNewUserHandler}>
        <Input
          title="Username"
          type="text"
          name="username"
          placeholder="Enter a username"
          onChange={usernameHandler}
        />
        <Input
          title="Age (Years)"
          type="number"
          name="age"
          placeholder="Enter an age"
          onChange={ageHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
		</Card>
	);
};

export default AddUsers;
