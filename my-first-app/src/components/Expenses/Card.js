import './Card.css';

const Card = (props) => (
    <div className={`card ${props.className}`}>{props.children}</div>
)

export default Card;
