import React, { useState } from 'react';
import { formActionMap } from '../../utils/helpers';
import FormLayout from '../FormLayout';
import { DynamicFormProps } from './interface';

const DynamicForm: React.FC<DynamicFormProps> = ({
	uiConfig: config,
	onSubmit,
	disabledFooterAnchorClick = false,
	hideCloseIcon = false,
}) => {
	const [formData, setFormData] = useState<Record<string, string>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const triggerFnFromActionMap = (actionName: string) => {
		if (actionName && typeof formActionMap[actionName] === 'function') {
			formActionMap[actionName]();
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (typeof onSubmit === 'function') {
			onSubmit(formData);
			return;
		}

		triggerFnFromActionMap(config.submitButton.onSubmit!);
	};

	const handleFooterAnchorClick = (e: React.MouseEvent) => {
		e.preventDefault();
		triggerFnFromActionMap(config.footer.link.onClick!);
	};

	const handleCrossClick = () => {
		triggerFnFromActionMap(config.crossBtnConfig.onClick!);
	};

	return (
		<FormLayout>
			{!hideCloseIcon && (
				<div
					className='cursor-pointer close-icon text-white absolute right-4 top-4 theme-bg w-8 h-8 rounded-full flex justify-center items-center'
					onClick={handleCrossClick}
				>
					&#10005;
				</div>
			)}
			<form onSubmit={handleSubmit} className='space-y-3'>
				<div className='text-center mb-8 cursor-default'>
					<p className='text-sm text-zinc-500 mb-2'>{config.subtitle}</p>
					<h2 className='text-white text-xl'>{config.title}</h2>
				</div>
				{config.fields.map((field) => (
					<div key={field.name}>
						<div className='flex flex-rows justify-between'>
							<label
								htmlFor={field.name}
								className='block text-gray-300 mb-1 text-base'
							>
								{field.label}
							</label>

							{field.type === 'password' && field.showPassword && (
								<div className='text-gray-300 cursor-pointer'>
									Forgot password?
								</div>
							)}
						</div>

						<div
							className={`flex flex-row outline outline-1 outline-gray-700 rounded`}
						>
							<input
								type={field.type}
								id={field.name}
								name={field.name}
								value={formData[field.name] || ''}
								onChange={handleChange}
								className='w-full bg-zinc-800 text-white rounded px-3 py-2 placeholder-gray-500 text-base outline-0 cursor-default'
								placeholder={field.placeholder}
							/>
							{field.type === 'password' && (
								<svg
									className='h-100 w-8 z-10 text-gray-500 text-right position-absolute mr-2 p-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
									/>
								</svg>
							)}
						</div>
					</div>
				))}
				<button
					type='submit'
					className='w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600'
				>
					{config.submitButton.text}
				</button>
				<p
					className='text-left text-gray-500 text-sm mt-3 cursor-pointer'
					onClick={
						!disabledFooterAnchorClick ? handleFooterAnchorClick : () => {}
					}
				>
					{config.footer.text}{' '}
					<a href={config.footer.link.url} className='text-gray-300'>
						{config.footer.link.text}
					</a>
				</p>
			</form>
		</FormLayout>
	);
};

export default DynamicForm;
