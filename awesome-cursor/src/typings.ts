export type TTheme = 'light' | 'dark';

export interface IGestures {
	scrollToTop?: boolean;
	scrollToBottom?: boolean;
	context: TGestureContext;
}

export type TGestureContext = 'scroll';

export interface ISwipeDirections {
	top: boolean;
	bottom: boolean;
	left: boolean;
	right: boolean;
}
