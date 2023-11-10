import './MobileNavbar.scss';
import React, { PropsWithChildren } from 'react';

export const MobileNavbarButton = (({children}: PropsWithChildren) => {
	return (
			<button className="bottom-navbar__button">{children}</button>
	);
});

const MobileNavbar = ({children}: PropsWithChildren) => {
	return (
		<nav className="bottom-navbar">
			{children}
		</nav>
	);
};

MobileNavbar.Button = MobileNavbarButton;

export default MobileNavbar;
