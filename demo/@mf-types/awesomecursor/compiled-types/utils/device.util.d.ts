import type { ISwipeDirections, TGestures } from '@/typings';
export declare const isSwipeUp: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeDown: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeLeft: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeRight: (swipeDirections: ISwipeDirections) => boolean;
export declare const isSwipeUpGestureActive: (gestures: TGestures) => boolean | undefined;
export declare const isSwipeDownGestureActive: (gestures: TGestures) => boolean | undefined;
