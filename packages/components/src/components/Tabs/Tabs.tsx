import React from 'react';
import './Tabs.scss';

interface TabProps {
	id: string|number;
	text: string;
	href?: string;
	active?: boolean;
}

interface TabsProps {
	tabs: TabProps[],
	createInternalLink: Function;
}


const Tabs = (props: TabsProps) => {
	return (
		<div className="tabs">
			<ul className="tab-bar">
				{
					props.tabs.map(({id, text, href, active}) => {
						console.log({props})
						if (props.createInternalLink) {
							return props.createInternalLink({id, text, href, active})
						}
						return (<li key={id}>
						<a href={href || '#'} className={active ? 'tab tab--active' : 'tab'}>
							{text}
						</a>
					</li>)
				})
				}
			</ul>
		</div>
	);
};

export default Tabs;
