import styles from './Card.module.css';

const Card = (props) => {
	// to pass children elements directly into their output
	// <ReactELEMENT>CHILDREN GOES HERE</ReactELEMENT>
	return <div className={styles.Card}>{props.children}</div>;
};

export default Card;
