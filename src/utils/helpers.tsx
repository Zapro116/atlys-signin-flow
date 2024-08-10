import Popover from '../components/Popover';
import { ATLYS_HARIOM_APP, CLOSE_POPOVER, OPEN_POPOVER } from './constant';

type formActionMapper = {
	[key: string]: () => void;
};

export const communicationHelper = {
	createMessagePayload: (payload: { [key: string]: any }) => ({
		source: ATLYS_HARIOM_APP,
		payload,
	}),
};

export const formActionMap: formActionMapper = {
	closePopoverFn: () => {
		window.postMessage(
			communicationHelper.createMessagePayload({
				event: CLOSE_POPOVER,
			}),
			'/'
		);
	},
	openLoginForm: () => {
		window.postMessage(
			communicationHelper.createMessagePayload({
				event: OPEN_POPOVER,
				viewType: Popover.VIEWS.LOGIN,
			}),
			'/'
		);
	},
	openSignupForm: () => {
		window.postMessage(
			communicationHelper.createMessagePayload({
				event: OPEN_POPOVER,
				viewType: Popover.VIEWS.SIGNUP,
			}),
			'/'
		);
	},
};
