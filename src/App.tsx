import React, { useEffect, useState } from 'react';
import ViewSkeleton from './components/ViewSkeleton';
import { FEED_PAGE, LOGIN_PAGE } from './utils/constant';
import Popover from './components/Popover';
import { routeConfig } from './config/routes';

const App: React.FC = () => {
	const [page, setPage] = useState<string>(LOGIN_PAGE);

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
