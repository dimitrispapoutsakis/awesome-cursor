import state from '@helpers/State';
import { isDarkEl, isHoveringToAnchor } from '@utils/ui.util';
import { useCallback, useEffect } from 'react';
import { useGlobal } from './GlobalProvider';

const IosPointerCursor = () => {
	const { iosPointerAnchorEl, setHoveringIosPointerStyle } = useGlobal();

	const handleIosPointer = useCallback((e: MouseEvent) => {
		const hoveringEl = e.target as HTMLElement;
		if (isHoveringToAnchor(hoveringEl, iosPointerAnchorEl)) {
			const innerSpanEl = hoveringEl.querySelector('span');
			const anchorRect = hoveringEl.getBoundingClientRect();
			const offsetX = state.mouseX - (anchorRect.left + anchorRect.width / 2);
			const offsetY = state.mouseY - (anchorRect.top + anchorRect.height / 2);

			// Convert to percentages and cap at 5%
			/**
			 * Calculate the offset of the mouse pointer from the center of the anchor element,
			 * convert it to a percentage relative to the element's width/height,
			 * and clamp the value between -5% and 5% to limit the translation.
			 *
			 * maxOffsetX: Horizontal offset as a percentage of the element's width, clamped to [-5, 5].
			 * maxOffsetY: Vertical offset as a percentage of the element's height, clamped to [-5, 5].
			 */
			// Calculate the offset in px, clamped to a maximum of 5px in any direction
			const maxOffsetX = Math.max(-1.5, Math.min(1.5, offsetX));
			const maxOffsetY = Math.max(-1.5, Math.min(1.5, offsetY));

			// const pointerOffsetx = state.mouseX - offsetX / 1.2;
			// const pointerOffsetY = state.mouseY - offsetY / 1.2;
			const pointerOffsetx = state.mouseX - offsetX / 1.2 + maxOffsetX;
			const pointerOffsetY = state.mouseY - offsetY / 1.2 + maxOffsetY;

			setHoveringIosPointerStyle({
				width: hoveringEl.offsetWidth,
				height: hoveringEl.offsetHeight,
				padding: '10px 35px',
				borderRadius: '10px',
				backgroundColor: isDarkEl(hoveringEl)
					? 'rgb(61, 61, 61)'
					: 'rgb(221, 221, 221)',
				transformOrigin: '50% 50% 0px',
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
			const innerSpanEl = hoveringEl.querySelector('span');
			if (innerSpanEl) {
				innerSpanEl.style.transform = `translate3d(0, 0, 0)`;
				innerSpanEl.style.pointerEvents = `auto`;
			}

			(state.awesomeCursorEl as HTMLElement).style.mixBlendMode = 'normal';

			setHoveringIosPointerStyle({});
			state.iosPointerActive = false;
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', handleIosPointer, {
			passive: true,
		});
	}, []);

	return null;
};

export default IosPointerCursor;
