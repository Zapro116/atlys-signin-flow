export interface PostData {
	id: number;
	avatar: string;
	name: string;
	timeAgo: string;
	content: string;
	commentCount: number;
	contentImage: string;
	isEdited?: boolean;
}
