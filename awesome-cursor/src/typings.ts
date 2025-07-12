/* Ui... */
export type TTheme = 'light' | 'dark';

/* Device... */
export interface IScrollGesture {
	active?: true;
	onScrollEnd?: null | (() => void);
}

export interface IScrollGestures {
	scrollToTop?: IScrollGesture;
	scrollToBottom?: IScrollGesture;
	mouseButton?: 'left' | 'right';
	scrollEndEffect?: boolean;
}

export type TScrollDirection = 'up' | 'down' | null;

export type TScrollEndEffect = 'none' | 'bounce' | 'linux';

export type TGestures = IScrollGestures;

export interface ISwipeDirections {
	top: boolean;
	bottom: boolean;
	left: boolean;
	right: boolean;
}
