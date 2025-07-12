import state from '@helpers/State';
import { isDarkEl, isHoveringToAnchor } from '@utils/ui.util';
import { useCallback, useEffect } from 'react';
import { useGlobal } from './GlobalProvider';
import { scale } from '@/utils/math.util';

const IosPointerCursor = () => {
	const { iosPointerAnchorEl, setHoveringIosPointerStyle } = useGlobal();

	const handleIosPointer = useCallback((e: MouseEvent) => {
		const hoveringEl = e.target as HTMLElement;
		if (isHoveringToAnchor(hoveringEl, iosPointerAnchorEl)) {
			const innerSpanEl = hoveringEl.querySelector('span');
			const anchorRect = hoveringEl.getBoundingClientRect();
			const offsetX = state.mouseX - (anchorRect.left + anchorRect.width / 2);
			const offsetY = state.mouseY - (anchorRect.top + anchorRect.height / 2);

			const maxOffsetX = scale(offsetX, 0.2);
			const maxOffsetY = scale(offsetY, 0.2);

			const pointerOffsetx = state.mouseX - offsetX / 1.3;
			const pointerOffsetY = state.mouseY - offsetY / 1.3;

			setHoveringIosPointerStyle({
				width: hoveringEl.offsetWidth,
				height: hoveringEl.offsetHeight,
				padding: '10px 35px',
				borderRadius: '10px',
				backgroundColor: isDarkEl(hoveringEl)
					? 'rgb(61, 61, 61)'
					: 'rgb(221, 221, 221)',
			});

			(state.awesomeCursorEl as HTMLElement).style.mixBlendMode = isDarkEl(
				hoveringEl,
			)
				? 'exclusion'
				: 'multiply';

			(state.awesomeCursorEl as HTMLElement).style.transform =
				`translate3d(${pointerOffsetx}px, ${pointerOffsetY}px, 0)`;

			if (innerSpanEl) {
				innerSpanEl.style.pointerEvents = `none`;
				innerSpanEl.style.display = `inline-block`;
				innerSpanEl.style.transform = `translate3d(${maxOffsetX}px, ${maxOffsetY}px, 0px)`;
			}

			state.iosPointerActive = true;
		} else {
			if (state.iosPointerActive) {
				const innerSpanEl = hoveringEl.querySelector('span');
				if (innerSpanEl) {
					innerSpanEl.style.transform = `translate3d(0, 0, 0)`;
					innerSpanEl.style.pointerEvents = `auto`;
				}

				(state.awesomeCursorEl as HTMLElement).style.mixBlendMode = 'normal';

				setHoveringIosPointerStyle({});
				state.iosPointerActive = false;
			}
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', handleIosPointer, {
			passive: true,
		});

		return () => {
			document.removeEventListener('mousemove', handleIosPointer);
		};
	}, []);

	return null;
};

export default IosPointerCursor;
