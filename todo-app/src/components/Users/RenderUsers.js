import Card from '../UI/Card';
// CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.
import styles from './RenderUsers.module.css';

const RenderUsers = (props) => {
	return (
		props.usersList.length ?
		<Card>
			{props.usersList.map((list) => {
				return (
					<div className={styles.RenderUsers} key={`key-${list.id}`}>
						{list.username} ({list.age}) years old
					</div>
				);
			})}
		</Card> : ''
	);
};

export default RenderUsers;
