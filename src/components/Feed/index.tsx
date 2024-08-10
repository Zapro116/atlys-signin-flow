import HelloImage from '@images/hello.png';
import MarvinImage from '@images/marvin.png';
import MessageImage from '@images/message.png';
import SadFaceImage from '@images/sad_face.png';
import TheresaImage from '@images/theresa.png';
import React, { useState } from 'react';
import { OPEN_POPOVER } from '../../utils/constant';
import { communicationHelper } from '../../utils/helpers';
import Popover from '../Popover';
import Post from '../Post';
import { PostData } from './interface';

const Feed: React.FC = () => {
	const [posts, setPosts] = useState<PostData[]>([
		{
			id: 1,
			avatar: TheresaImage,
			name: 'Theresa Webb',
			timeAgo: '5mins ago',
			content:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			commentCount: 24,
			contentImage: HelloImage,
		},
		{
			id: 2,
			avatar: MarvinImage,
			name: 'Marvin McKinney',
			timeAgo: '8mins ago',
			content:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			commentCount: 0,
			contentImage: SadFaceImage,
			isEdited: true,
		},
	]);

	const handleOpenModal = () => {
		console.log('handleOpenModal fn called', Popover.VIEWS);

		window.postMessage(
			communicationHelper.createMessagePayload({
				event: OPEN_POPOVER,
				viewType: Popover.VIEWS.SIGNUP,
			}),
			'/'
		);
	};

	return (
		<div className='w-1/2 mx-auto p-4'>
			<Post
				isCreatePost
				contentImage={MessageImage}
				onClick={handleOpenModal}
			/>
			{posts.map((post) => (
				<Post key={post.id} {...post} onClick={handleOpenModal} />
			))}
		</div>
	);
};

export default Feed;
