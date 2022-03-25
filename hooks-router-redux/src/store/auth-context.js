import React, { useState, useEffect } from 'react';

// Context provides a way to pass data through the component
// tree without having to pass props down manually at every level.
// const MyContext = React.createContext(defaultValue);
const AuthContext = React.createContext({
	// Provider Values
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
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

