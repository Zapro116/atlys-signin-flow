interface RouteConfigItem {
	Header: React.ComponentType<any>;
	Component: React.ComponentType<any>;
	props?: {
		uiConfig?: any;
		[key: string]: any;
	};
}

export type RouteConfigType = {
	[key: string]: RouteConfigItem;
};
