import { rippleAnimationDuration } from '@constants/generic';
import { useCallback, useEffect } from 'react';
import state from '../helpers/State';
import { useGlobal } from './GlobalProvider';
import { isHoveringToAnchor } from '@/utils/ui.util';
import Ripple from './Ripple/Ripple';

const SideEffects = () => {
	const { setHasClicked, iosPointerAnchorEl, rippleColor } = useGlobal();
	const { setRipples, setRippleIndex, rippleIndex } = useGlobal();

	const hideNativeCursor = useCallback(() => {
		const allEls = document.querySelectorAll('*');
		allEls.forEach((el) => {
			(el as HTMLElement).style.cursor = 'none';
		});
	}, []);

	const onPointerDown = useCallback(
		(e: MouseEvent) => {
			(state.awesomeCursorInnerEl as HTMLElement).style.transform =
				`translate(-50%, -50%) scale3d(.85, .85, .85)`;

			const hoveringEl = e.target as HTMLElement;
			if (isHoveringToAnchor(hoveringEl, iosPointerAnchorEl)) {
				hoveringEl.style.transition = `transform .15s ease`;
				hoveringEl.style.transform = `scale3d(.85, .85, .85)`;
				hoveringEl.style.pointerEvents = `auto`;
			}

			if (!state.iosPointerActive) {
				setHasClicked(true);
				/* @ts-ignore */
				setRippleIndex((prevIndex: number) => prevIndex + 1);

				/* @ts-ignore */
				setRipples((prevRipples) => [
					...prevRipples,
					<Ripple
						key={`awesome-cursor-ripple-${prevRipples.length}`}
						x={state.cursorX}
						y={state.cursorY}
						animationDuration={rippleAnimationDuration}
						rippleColor={rippleColor}
					/>,
				]);
			}
		},
		[rippleColor],
	);

	const onPointerUp = useCallback((e: MouseEvent) => {
		const hoveringEl = e.target as HTMLElement;
		setTimeout(() => {
			(state.awesomeCursorInnerEl as HTMLElement).style.transform =
				`translate(-50%,
				 -50%) scale3d(1, 1, 1)`;
			hoveringEl.style.transform = `translate3d(0, 0, 0)`;
		}, 100);
	}, []);

	useEffect(() => {
		if (!state.iosPointerActive) {
			if (rippleIndex > 0) {
				const timer = setTimeout(() => {
					setRippleIndex(0);
					setRipples([]);
				}, rippleAnimationDuration * rippleIndex);

				return () => clearTimeout(timer);
			}
		}
	}, [rippleIndex]);

	useEffect(() => {
		hideNativeCursor();
		document.addEventListener('pointerdown', onPointerDown, {
			passive: true,
		});

		document.addEventListener('pointerup', onPointerUp, {
			passive: true,
		});

		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('pointerup', onPointerUp);
		};
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
