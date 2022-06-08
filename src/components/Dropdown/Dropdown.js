import React, { useState } from 'react';
import './Dropdown.css';

export default function Dropdown(props) {
	const options = [
		{
			id: 0,
			key: 'Africa',
		},
		{
			id: 1,
			key: 'America',
		},
		{
			id: 2,
			key: 'Asia',
		},
		{
			id: 3,
			key: 'Europe',
		},
		{
			id: 4,
			key: 'Africa',
		},
	];

	const [isListOpen, setIsListOpen] = useState(false);
	const [headerTitle, setHeaderTitle] = useState('Filter by Region');

	const toggleList = () => {
		setIsListOpen((prevState) => !prevState);
	};

	const selectItem = (item) => {
		setIsListOpen((prevState) => !prevState);
		setHeaderTitle(() => {
			props.setFilteredCountriesByRegion(item.key);

			return item.key;
		});
	};

	return (
		<div className="dropdown-wrapper">
			<button
				type="button"
				className="dropdown-header layout-bg"
				onClick={toggleList}
			>
				{headerTitle } {isListOpen ? 'up' : 'down'}
			</button>
			{isListOpen && (
				<div role="list" className="dropdown-list layout-bg">
					{options.map((item) => (
						<button
							type="button"
							className="dropdown-list-item"
							key={item.id}
							onClick={() => selectItem(item)}
						>
							{item.key} {item.selected && 'checked'}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
