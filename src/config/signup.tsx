export const signupConfig = {
	title: 'Create an account to continue',
	subtitle: 'SIGN UP',
	fields: [
		{
			type: 'text',
			name: 'email',
			label: 'Email',
			placeholder: 'Enter your email',
		},
		{
			type: 'text',
			name: 'username',
			label: 'Username',
			placeholder: 'Choose a preferred username',
		},
		{
			type: 'password',
			name: 'password',
			label: 'Password',
			placeholder: 'Choose a strong password',
			showPassword: false,
		},
	],
	submitButton: {
		text: 'Continue',
		onSubmit: 'closePopoverFn',
	},
	footer: {
		text: 'Already have an account?',
		link: {
			text: 'Login →',
			url: '#',
			onClick: 'openLoginForm',
		},
	},
	crossBtnConfig: {
		onClick: 'closePopoverFn',
	},
};
