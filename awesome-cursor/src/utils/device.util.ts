import type { ISwipeDirections } from '@/typings';

export const isSwipeUp = (swipeDirections: ISwipeDirections) =>
	swipeDirections.top === true;
export const isSwipeDown = (swipeDirections: ISwipeDirections) =>
	swipeDirections.bottom === true;
export const isSwipeLeft = (swipeDirections: ISwipeDirections) =>
	swipeDirections.left === true;
export const isSwipeRight = (swipeDirections: ISwipeDirections) =>
	swipeDirections.right === true;
