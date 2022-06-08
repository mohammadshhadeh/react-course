export function getCountries() {
	return fetch('https://restcountries.com/v3.1/all')
		.then((res) => res.json())
		.catch((err) =>
			console.error('Error in fetching countries data:', err),
		);
};

export async function getCountryByName(name = '') {
	return fetch(`https://restcountries.com/v3.1/name/${name}`)
		.then((res) => res.json())
		.catch((err) =>
			console.error('Error in fetching country data:', err),
		);
};

export async function getCountryByRegion(region = '') {
	return fetch(`https://restcountries.com/v3.1/region/${region}`)
		.then((res) => res.json())
		.catch((err) =>
			console.error('Error in fetching countries by region:', err),
		);
};
