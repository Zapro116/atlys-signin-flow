import React, { useEffect, useState } from 'react';
import Popover from './components/Popover';
import ViewSkeleton from './components/ViewSkeleton';
import { routeConfig } from './config/routes';
import { FEED_PAGE, LOGIN_PAGE } from './utils/constant';
import AtlysLogo from '@images/atlys_logo.jpg';

const App: React.FC = () => {
	const [page, setPage] = useState<string>(LOGIN_PAGE);

	// Dynamically setting the favicon
	useEffect(() => {
		const newLink = document.createElement('link');
		newLink.rel = 'icon';
		newLink.href = AtlysLogo;
		document.head.appendChild(newLink);
	}, []);

	const handleSubmit = (formData: Record<string, string>) => {
		console.log('Form submitted:', formData);
		setPage(FEED_PAGE);
	};

	let { Component, Header, props = {} } = routeConfig[page];

	if (page === LOGIN_PAGE) {
		props = {
			...props,
			disabledFooterAnchorClick: true,
			hideCloseIcon: true,
		};
	}

	return (
		<>
			<ViewSkeleton
				isOpen={true}
				onClose={() => {}}
				blurAmount={0}
				Header={Header}
				className='flex-col'
				activeRoute={page}
			>
				<Component {...props} onSubmit={handleSubmit} />
			</ViewSkeleton>
			<Popover key='popover' />
		</>
	);
};

export default App;
