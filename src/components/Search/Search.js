import React from 'react';
import './Search.css';
import { throttle } from '../../Services/throttle';

export default function Search(props) {
	const handleOnChange = (event) => {
		throttle(props.setFilteredCountriesByName(event.target.value), 1500);
	};

	return (
		<input
			className="search layout-bg"
			type="text"
			placeholder="Search for a country"
			onChange={handleOnChange}
		/>
	);
}
