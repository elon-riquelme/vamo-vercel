import './PanelHeader.scss';
import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface PanelHeaderProps {
	leftSlot?: ReactNode,
	rightSlot?: ReactNode,
	mainSlot: ReactNode,
	className?: string,
}

const PanelHeader = ({
	leftSlot,
	rightSlot,
	mainSlot,
	className
}: PanelHeaderProps) => {
	return (
		<div className={classnames('panel-header', className)}>
			{leftSlot &&
				<div className="panel-header__slot_left">
					{leftSlot}
				</div>
			}
			<header className="panel-header__title">{mainSlot}</header>
			{rightSlot &&
				<div className="panel-header__slot_right">
					{rightSlot}
				</div>
			}
		</div>
	);
};

export default PanelHeader;
