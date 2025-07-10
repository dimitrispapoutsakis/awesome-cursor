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
			const maxOffsetX = Math.max(
				-5,
				Math.min(5, (offsetX / anchorRect.width) * 100),
			);
			const maxOffsetY = Math.max(
				-5,
				Math.min(5, (offsetY / anchorRect.height) * 100),
			);

			const pointerOffsetx = state.mouseX - offsetX / 1.3;
			const pointerOffsetY = state.mouseY - offsetY / 1.3;

			console.log(isDarkEl(hoveringEl));
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
				innerSpanEl.style.transition = 'transform .10s ease';
				innerSpanEl.style.pointerEvents = `none`;
				innerSpanEl.style.display = `inline-block`;
				innerSpanEl.style.transform = `translate3d(${maxOffsetX}%, ${maxOffsetY}%, 0px)`;
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
