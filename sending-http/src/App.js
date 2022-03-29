import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// const movies = [
	//   {
	//     episode_id: 1,
	//     title: 'Some Dummy Movie',
	//     opening_crawl: 'This is the opening text of the movie',
	//     releaseDate: '2021-05-18',
	//   },
	//   {
	//     episode_id: 2,
	//     title: 'Some Dummy Movie 2',
	//     opening_crawl: 'This is the second opening text of the movie',
	//     releaseDate: '2021-05-19',
	//   },
	// ];

	const fetchMoviesHandler = useCallback(() => {
		setIsLoading(true);
		setError(false);
		fetch(
			'https://practicing-project-c4c3a-default-rtdb.firebaseio.com/movies.json',
		)
			.then((res) => res.json())
			.then((data) => {
				const loadedMovies = [];

				for (const key in data) {
					loadedMovies.push({
						id: key,
						title: data[key].title,
						openingText: data[key].title,
						releaseDate: data[key].releaseDate,
					});
				}
				setMovies(() => loadedMovies);
				setIsLoading(false);
				return loadedMovies;
			})
			.catch(() => {
				setError(true);
				setIsLoading(false);
			});
	}, []);

	const addMoviesHandler = async (movie) => {
		const results = await fetch(
			'https://practicing-project-c4c3a-default-rtdb.firebaseio.com/movies.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(movie),
			},
		);
		const data = await results.json();
		console.log('data: ', data);
	};

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMoviesHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{error && <p>Error Can't Fetch Movie Data </p>}
				{!isLoading && movies.length > 0 && (
					<MoviesList movies={movies} />
				)}
				{!isLoading && !error && movies.length === 0 && (
					<p>Found no movies.</p>
				)}
				{isLoading && <p>Loading....</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
