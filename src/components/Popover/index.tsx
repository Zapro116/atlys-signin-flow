import React, { useEffect, useRef, useState } from 'react';
import { routeConfig } from '../../config/routes';
import {
	ATLYS_HARIOM_APP,
	CLOSE_POPOVER,
	LOGIN_PAGE,
	OPEN_POPOVER,
	SIGNUP_PAGE,
} from '../../utils/constant';
import './index.scss';
import { PopoverComponent } from './interface';

const Popover: PopoverComponent = () => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [viewType, setViewType] = useState<string | null>(null);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === popoverRef.current) {
			e.preventDefault();
			setIsOpen(false);
		}
	};

	const handleMessageReceived = (event: MessageEvent) => {
		const { source, payload } = event.data;

		console.log('received message: ', event.data);

		if (source === ATLYS_HARIOM_APP) {
			switch (payload.event) {
				case OPEN_POPOVER:
					setViewType(payload.viewType);
					setIsOpen(true);
					break;
				case CLOSE_POPOVER:
					setViewType(null);
					setIsOpen(false);
					break;
				default:
					break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('message', handleMessageReceived);

		return () => {
			window.removeEventListener('message', handleMessageReceived);
		};
	}, []);

	if (!isOpen || !viewType) return null;

	const { Component, props = {} } = routeConfig[viewType];

	return (
		<div
			className='popover backdrop'
			ref={popoverRef}
			onClick={handleClick}
			key={viewType}
		>
			<Component {...props} />
		</div>
	);
};

Popover.VIEWS = {
	LOGIN: LOGIN_PAGE,
	SIGNUP: SIGNUP_PAGE,
};

export default Popover;
