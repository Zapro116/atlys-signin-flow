import React from 'react';
import { FormLayoutProps } from './interface';
import './index.scss';

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
	return (
		<div className='modal-container rounded-lg shadow-lg z-10 w-96 relative mt-12'>
			<div className='modal-children bg-zinc-800 p-8 rounded-lg'>
				{children}
			</div>
		</div>
	);
};

export default FormLayout;
