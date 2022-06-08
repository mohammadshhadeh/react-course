import React from 'react';
import './Card.css';

export default function Card(props) {
	return <div className="grid-item layout-bg">{props.children}</div>;
}
