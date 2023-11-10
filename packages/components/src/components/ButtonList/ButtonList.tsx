import './ButtonList.scss';
import React, { PropsWithChildren } from 'react';

const Button = ({children}: PropsWithChildren) => {
	return (
		<div className="left-navbar__item">	
			{children}
		</div>
	)
}



const ButtonList = ({ children }: PropsWithChildren) => {
	return (
		<nav className="left-navbar__main">
			{children}
		</nav>
	);
};

ButtonList.Button = Button;

export default ButtonList;
