import React from 'react';
import { FEED_PAGE } from '../../utils/constant';
import HomePageLogo from '@images/HomepageLogo.jpg';

interface HeaderProps {
	activeRoute: string;
}

const Header: React.FC<HeaderProps> = ({ activeRoute }) => {
	return (
		<>
			{activeRoute === FEED_PAGE ? (
				<header className='w-1/2 p-4 cursor-default'>
					<h1 className='text-white text-3xl opacity-80 mt-12 mb-3'>
						Hello Jane
					</h1>
					<p className='text-white opacity-50 mb-10'>
						How are you doing today? Would you like to share something with the
						community 🤗
					</p>
				</header>
			) : (
				<div className='flex justify-center cursor-default'>
					<img
						src={HomePageLogo}
						style={{
							filter: 'invert(100%) brightness(400%) grayscale(100%)',
						}}
					/>
				</div>
			)}
		</>
	);
};

export default Header;
