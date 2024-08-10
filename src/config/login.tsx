export const loginConfig = {
	title: 'Log into your account',
	subtitle: 'WELCOME BACK',
	fields: [
		{
			type: 'text',
			name: 'emailOrUsername',
			label: 'Email or Username',
			placeholder: 'Enter your email or username',
		},
		{
			type: 'password',
			name: 'password',
			label: 'Password',
			placeholder: 'Enter your password',
		},
	],
	submitButton: {
		text: 'Login now',
		onSubmit: 'closePopoverFn',
	},
	footer: {
		text: 'Not registered yet?',
		link: {
			text: 'Register →',
			url: '#',
			onClick: 'openSignupForm',
		},
	},
	crossBtnConfig: {
		onClick: 'closePopoverFn',
	},
};
