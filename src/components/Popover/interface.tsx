interface PopoverProps {
	children?: React.ReactNode;
}

export interface PopoverComponent extends React.FC<PopoverProps> {
	VIEWS: {
		LOGIN: string;
		SIGNUP: string;
	};
}
