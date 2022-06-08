import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import './countries.css';

export default function Countries({ countries = [] }) {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/country/${id}`, { replace: true });
	};

	return (
		<div className="content-wrapper">
			<div className="countries-grid">
				{ !!countries.length && countries.map((country) => {
					const {
						flags: { png: image = '' } = {},
						name: { official = '' } = {},
						population,
						region,
						capital = [],
						numericCode: key,
					} = country;

					return (
						<div
							key={`${key}-${official}`}
							data-region={region}
							onClick={() => handleClick(official)}
						>
							<Card>
								<div className="image-container">
									<div
										className="card-image"
										style={{
											backgroundImage: `url(${image})`,
										}}
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
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
}
