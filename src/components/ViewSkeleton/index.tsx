import React from 'react';
import { LOGIN_PAGE } from '../../utils/constant';
import { ViewSkeletonProps } from './interface';
import './index.scss';

const ViewSkeleton: React.FC<ViewSkeletonProps> = ({
	isOpen,
	children,
	Header,
	className = '',
	activeRoute = '',
}) => {
	if (!isOpen) return null;

	let classNames = `main-container w-full inset-0 flex items-center justify-center theme-bg items-center justify-center 
		${className} ${activeRoute === LOGIN_PAGE ? 'h-full' : ''}`;

	return (
		<div className={classNames}>
			<Header activeRoute={activeRoute} />
			{children}
		</div>
	);
};

export default ViewSkeleton;
