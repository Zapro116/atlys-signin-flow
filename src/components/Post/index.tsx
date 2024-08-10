import React, { useState } from 'react';
import CommentImage from '@images/comment.png';
import { PostProps } from './interface';

const Post: React.FC<PostProps> = ({
	isCreatePost = false,
	avatar,
	name,
	timeAgo,
	content: initialContent = '',
	commentCount = 0,
	onPost,
	contentImage,
	isEdited,
	onClick,
}) => {
	const [content, setContent] = useState(initialContent);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (content.trim() && onPost) {
			onPost(content);
			if (isCreatePost) setContent('');
		}
	};

	const handleOnClick = (e: any) => {
		e.stopPropagation();

		onClick();
	};

	return (
		<div
			className='bg-zinc-800 rounded-lg p-5 pt-6 mb-4 cursor-pointer'
			onClick={handleOnClick}
		>
			{isCreatePost && (
				<h2 className='text-white text-xl mb-2 '>Create post</h2>
			)}
			<form onSubmit={handleSubmit}>
				<div className='flex items-center mb-2'>
					{avatar && (
						<img
							src={avatar}
							alt={name}
							className='w-10 h-10 rounded-full mr-3'
						/>
					)}
					{name && (
						<div>
							<h3 className='text-white font-semibold'>{name}</h3>
							{timeAgo && (
								<p className='text-gray-400 text-sm'>
									{timeAgo} {isEdited && '• Edited'}
								</p>
							)}
						</div>
					)}
					{!isCreatePost && (
						<button className='text-gray-400 hover:text-white ml-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
								/>
							</svg>
						</button>
					)}
				</div>
				<div className='theme-bg rounded-lg p-3 mb-4 flex flex-row cursor-pointer'>
					<img src={contentImage} className='h-12 w-12 text-gray-400 mr-2' />
					{isCreatePost ? (
						<input
							type='text'
							placeholder='How are you feeling today?'
							className='bg-transparent text-white w-full focus:outline-none bg-theme'
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					) : (
						<div className='text-gray-400'>{content}</div>
					)}
				</div>
				{(isCreatePost || onPost) && (
					<div className='flex justify-end'>
						<button
							type='submit'
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-9 rounded'
						>
							Post
						</button>
					</div>
				)}
			</form>
			{!isCreatePost && commentCount > 0 && (
				<div className='flex items-center text-gray-400 mt-2'>
					<img src={CommentImage} className='mr-2' />
					<span>{commentCount} comments</span>
				</div>
			)}
		</div>
	);
};

export default Post;
