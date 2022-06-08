import React from 'react';
import './Country.css';
import { useNavigate } from 'react-router-dom';

export default function Country(props = {}) {
	const navigate = useNavigate();
	const { country = [] } = props;
	const {
		flags: { png: image = '' } = {},
		name: { official = '' } = {},
		population,
		region,
		capital = [],
	} = country[0] || {};

	const handleClick = () => {
		navigate('/', { replace: true });
	};

	return (
		<div className="content-wrapper">
			<button onClick={handleClick}>Back</button>
			<div className="grid-block">
				<div className="image-container">
					<div
						className="card-image"
						style={{ backgroundImage: `url(${image})` }}
					></div>
				</div>
				<div className="card-details">
					<h3 className="card-name">{official}</h3>
					<div className="card-info">
						<h4>Population:</h4>
						<p>{population}</p>
					</div>
					<div className="card-info">
						<h4>Region:</h4>
						<p>{region}</p>
					</div>
					<div className="card-info">
						<h4>Capital:</h4>
						<p>{capital[0] || 'N/A'}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
