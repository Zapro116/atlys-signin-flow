import DynamicForm from '../components/DynamicForm';
import Feed from '../components/Feed';
import Header from '../components/Header';
import { FEED_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from '../utils/constant';
import { loginConfig } from './login';
import { RouteConfigType } from './routesInterface';
import { signupConfig } from './signup';

export const routeConfig: RouteConfigType = {
	[LOGIN_PAGE]: {
		Header: Header,
		Component: DynamicForm,
		props: {
			uiConfig: loginConfig,
		},
	},
	[FEED_PAGE]: {
		Header: Header,
		Component: Feed,
	},
	[SIGNUP_PAGE]: {
		Header: Header,
		Component: DynamicForm,
		props: {
			uiConfig: signupConfig,
		},
	},
};
