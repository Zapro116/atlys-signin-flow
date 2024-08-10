interface FormField {
	type: string;
	name: string;
	label: string;
	placeholder?: string;
	showPassword?: boolean;
}

interface FormConfig {
	title: string;
	subtitle: string;
	fields: FormField[];
	submitButton: {
		text: string;
		onSubmit?: string;
		onClick?: string;
	};
	footer: {
		text: string;
		link: {
			text: string;
			url: string;
			onClick?: string;
		};
	};
	crossBtnConfig: {
		onClick?: string;
	};
}

export interface DynamicFormProps {
	uiConfig: FormConfig;
	onSubmit: (formData: Record<string, string>) => void;
	disabledFooterAnchorClick?: boolean;
	hideCloseIcon?: boolean;
}
