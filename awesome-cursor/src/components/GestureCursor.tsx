import { useCallback, useEffect, useMemo } from 'react';
import { useGlobal } from './GlobalProvider';
/* @ts-ignore */
import SwipeListener from 'swipe-listener';
import {
	isSwipeDown,
	isSwipeDownGestureActive,
	isSwipeUp,
	isSwipeUpGestureActive,
} from '@/utils/device.util';
import { IScrollGestures } from '@/typings';

const GestureCursor = () => {
	const { gestures } = useGlobal();

	const onContextMenuListener = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	const onSwipeListener = useCallback((e: any) => {
		const swipeDirections = e.detail.directions;

		if (
			isSwipeUp(swipeDirections) &&
			isSwipeUpGestureActive(gestures as IScrollGestures)
		) {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
		} else if (
			isSwipeDown(swipeDirections) &&
			isSwipeDownGestureActive(gestures as IScrollGestures)
		) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, []);

	useEffect(() => {
		const bodyEl = document.querySelector('body');
		SwipeListener(bodyEl);
		document.addEventListener('contextmenu', onContextMenuListener);
		bodyEl?.addEventListener('swipe', onSwipeListener, {
			passive: false,
		});

		return () => {
			document.removeEventListener('contextmenu', onContextMenuListener);
			bodyEl?.removeEventListener('swipe', onSwipeListener);
		};
	}, []);

	return null;
};

export default GestureCursor;
