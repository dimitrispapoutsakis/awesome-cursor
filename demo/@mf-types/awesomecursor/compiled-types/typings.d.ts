export type TTheme = 'light' | 'dark';
export interface IScrollGesture {
    active?: boolean;
    onScrollEnd?: null | (() => void);
}
export interface IScrollGestures {
    scrollToTop?: IScrollGesture;
    scrollToBottom?: IScrollGesture;
    mouseButton?: 'left' | 'right';
}
export type TGestures = IScrollGestures;
export interface ISwipeDirections {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}
