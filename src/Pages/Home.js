import React, { useEffect, useState } from 'react';
import { getCountries, getCountryByRegion, getCountryByName } from '../Services/apiService';

import Header from '../Layouts/Header';
import Countries from '../Layouts/Countries';

import Search from '../components/Search';
import Dropdown from '../components/Dropdown';

export default function Home() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getCountries().then((items) => setCountries(items));
	}, []);

	const filterCountriesByRegion = (name) => {
		getCountryByRegion(name).then((items) => setCountries(items));
	};

	const filterCountriesByName = (name) => {
		if (name) {
			getCountryByName(name).then((items) => setCountries(items));
		} else {
			getCountries().then((items) => setCountries(items));
		}
	};

	return (
		<>
			<Header />
			<div className="body-wrapper content-wrapper">
				<Search setFilteredCountriesByName={filterCountriesByName} />
				<Dropdown setFilteredCountriesByRegion={filterCountriesByRegion} />
			</div>
			<Countries countries={countries} />
		</>
	);
}
