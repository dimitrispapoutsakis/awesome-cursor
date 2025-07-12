import type { ISwipeDirections, TScrollDirection, TGestures } from '@/typings';
export declare const isSwipeUp: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeDown: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeLeft: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeRight: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeUpGestureActive: (gestures: TGestures) => true | undefined;
export declare const isSwipeDownGestureActive: (gestures: TGestures) => true | undefined;
export declare const isScrollUp: (scrollDirection: TScrollDirection) => scrollDirection is "up";
export declare const isScrollDown: (scrollDirection: TScrollDirection) => scrollDirection is "down";
