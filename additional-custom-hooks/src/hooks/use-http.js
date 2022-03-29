import { useState, useCallback } from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig, dataHandler) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method || 'GET',
				headers: requestConfig.headers || {},
				body: requestConfig.body
					? JSON.stringify(requestConfig.body)
					: null,
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();

			dataHandler(data);
		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	}, []);

	return {
		sendRequest,
		isLoading,
		error,
	};
};

export default useHttp;
