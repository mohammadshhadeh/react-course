import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
	const { isLoading, sendRequest: sendTaskRequest, error } = useHttp();

	const transformTasks = (taskText, data) => {
		const generatedId = data.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = (taskText) => {
		sendTaskRequest(
			{
				method: 'POST',
				body: { text: taskText },
				headers: {
					'Content-Type': 'application/json',
				},
				url: 'https://practicing-project-c4c3a-default-rtdb.firebaseio.com/tasks.json',
			},
			transformTasks.bind(null, taskText),
		);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
