export interface ViewSkeletonProps {
	isOpen: boolean;
	onClose: () => void;
	blurAmount: number;
	children: React.ReactNode;
	logo?: string;
	Header: any;
	className: String;
	activeRoute: string;
}
