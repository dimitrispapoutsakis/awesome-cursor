import type { ISwipeDirections, TScrollDirection, TGestures } from '@/typings';

export const isSwipeUp = (swipeDirections: ISwipeDirections) =>
	swipeDirections.top;
export const isSwipeDown = (swipeDirections: ISwipeDirections) =>
	swipeDirections.bottom;
export const isSwipeLeft = (swipeDirections: ISwipeDirections) =>
	swipeDirections.left;
export const isSwipeRight = (swipeDirections: ISwipeDirections) =>
	swipeDirections.right;

export const isSwipeUpGestureActive = (gestures: TGestures) =>
	gestures.scrollToTop?.active;
export const isSwipeDownGestureActive = (gestures: TGestures) =>
	gestures.scrollToBottom?.active;

export const isScrollUp = (scrollDirection: TScrollDirection) =>
	scrollDirection === 'up';
export const isScrollDown = (scrollDirection: TScrollDirection) =>
	scrollDirection === 'down';
