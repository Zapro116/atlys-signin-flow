export interface PostProps {
	isCreatePost?: boolean;
	avatar?: string;
	name?: string;
	timeAgo?: string;
	content?: string;
	commentCount?: number;
	onPost?: (content: string) => void;
	contentImage: string;
	isEdited?: boolean;
	onClick: () => void;
}
