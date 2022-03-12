import React, { useState, useEffect } from 'react';

// provide and consume it
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const isLoggedInInfo = localStorage.getItem('isLoggedIn')

		setIsLoggedIn(isLoggedInInfo === '1');
	}, []);

	const logoutHandler = () => {
		localStorage.setItem('isLoggedIn', '0')
		setIsLoggedIn(false);
	};

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1')
		setIsLoggedIn(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

