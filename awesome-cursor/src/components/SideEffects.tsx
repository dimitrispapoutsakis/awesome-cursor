import { rippleAnimationDuration } from '@constants/generic';
import { useCallback, useEffect } from 'react';
import state from '../helpers/State';
import { useGlobal } from './GlobalProvider';

const SideEffects = () => {
	const { setHasClicked } = useGlobal();

	const hideNativeCursor = useCallback(() => {
		const allEls = document.querySelectorAll('*');
		allEls.forEach((el) => {
			(el as HTMLElement).style.cursor = 'none';
		});
	}, []);

	const onPointerDown = useCallback(() => {
		(state.awesomeCursorInnerEl as HTMLElement).style.transform =
			`translate(-50%, -50%) scale3d(.85, .85, .85)`;

		if (state.iosPointerActive) {
		}

		setHasClicked(true);

		setTimeout(() => {
			setHasClicked(false);
		}, rippleAnimationDuration);
	}, []);

	const onPointerUp = useCallback(() => {
		setTimeout(() => {
			(state.awesomeCursorInnerEl as HTMLElement).style.transform =
				`translate(-50%, -50%) scale3d(1, 1, 1)`;
		}, 100);
	}, []);

	useEffect(() => {
		hideNativeCursor();
		document.addEventListener('pointerdown', onPointerDown, {
			passive: true,
		});

		document.addEventListener('pointerup', onPointerUp, {
			passive: true,
		});
		/* 
		document.addEventListener(
			"mousemove",
			(e) => {
				(state.awesomeCursorInnerEl as HTMLElement).style.transform =
					"scale3d(1, 1, 1)";
			},
			{ once: true },
		); */
	}, []);

	return null;
};

export default SideEffects;
