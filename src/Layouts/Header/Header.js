import React from 'react';
import './Header.css';

export default function Header() {
	const toggleTheme = () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<header className='layout-bg'>
			<div className='content-wrapper header'>
				<h1>Where in the world?</h1>
				<button className='header-toggle' onClick={() => toggleTheme()}>
					Dark Mode
				</button>
			</div>
		</header>
	);
}
