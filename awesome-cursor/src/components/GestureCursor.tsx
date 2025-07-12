import { useCallback, useEffect, useMemo } from 'react';
import { useGlobal } from './GlobalProvider';
/* @ts-ignore */
import SwipeListener from 'swipe-listener';
import {
	isSwipeDown,
	isSwipeDownGestureActive,
	isSwipeUp,
	isSwipeUpGestureActive,
	isScrollDown,
	isScrollUp,
} from '@/utils/device.util';
import { IScrollGestures, TScrollDirection } from '@/typings';

const GestureCursor = () => {
	const { gestures } = useGlobal();
	let scrollDirection: TScrollDirection = useMemo(() => null, []);

	const onContextMenuListener = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	const onSwipeListener = useCallback((e: any) => {
		const swipeDirections = e.detail.directions;

		if (
			isSwipeUp(swipeDirections) &&
			isSwipeUpGestureActive(gestures as IScrollGestures)
		) {
			scrollDirection = 'down';
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		} else if (
			isSwipeDown(swipeDirections) &&
			isSwipeDownGestureActive(gestures as IScrollGestures)
		) {
			scrollDirection = 'up';
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, []);

	const handleScrollEndListener = useCallback(() => {
		if (isScrollUp(scrollDirection)) {
			gestures?.scrollToTop?.onScrollEnd?.();
		} else if (isScrollDown(scrollDirection)) {
			gestures?.scrollToBottom?.onScrollEnd?.();
		}
	}, []);

	useEffect(() => {
		const bodyEl = document.querySelector('body');
		SwipeListener(bodyEl);
		document.addEventListener('contextmenu', onContextMenuListener);
		bodyEl?.addEventListener('swipe', onSwipeListener, {
			passive: true,
		});

		document.addEventListener('scrollend', handleScrollEndListener);

		return () => {
			document.removeEventListener('contextmenu', onContextMenuListener);
			bodyEl?.removeEventListener('swipe', onSwipeListener);
			document.removeEventListener('scroll', handleScrollEndListener);
		};
	}, []);

	return null;
};

export default GestureCursor;
