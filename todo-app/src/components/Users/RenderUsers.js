import Card from '../UI/Card';
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
