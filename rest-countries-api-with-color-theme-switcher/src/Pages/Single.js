import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByName } from '../Services/apiService';
import Header from '../Layouts/Header';
import Country from '../Layouts/Country';

export default function Single() {
	const { id = '' } = useParams();
	const [country, setCountry] = useState([]);
	console.log('country: ', country);

	useEffect(() => {
		getCountryByName(id).then((item) => setCountry(item));
	}, []);

	return (
		<>
			<Header />
			<Country country={country} />
		</>
	);
}
