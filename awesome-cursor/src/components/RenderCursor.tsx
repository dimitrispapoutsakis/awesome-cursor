import { isHoveringToAnchor } from '@utils/ui.util';
import { useCallback, useEffect } from 'react';
import { useGlobal } from './GlobalProvider';

const RenderCursor = () => {
	const {
		renderOnHover,
		anchorEl,
		setButtonCursorStyle,
		setRenderButtonCursor,
		color,
	} = useGlobal();

	const handleRenderOnHover = useCallback(
		(e: MouseEvent) => {
			const shouldRenderButton = typeof renderOnHover === 'string';
			const hoveringEl = e.target as HTMLElement;

			if (isHoveringToAnchor(hoveringEl, anchorEl)) {
				if (shouldRenderButton) {
					setButtonCursorStyle({
						width: 'fit-content',
						height: 'fit-content',
						padding: '15px',
						borderRadius: '20px',
						backgroundColor: color,
					});
					setRenderButtonCursor(true);
				}
			} else {
				setButtonCursorStyle({});
				setRenderButtonCursor(false);
			}
		},
		[renderOnHover],
	);

	useEffect(() => {
		if (renderOnHover && anchorEl) {
			document.addEventListener('mouseover', handleRenderOnHover, {
				passive: true,
			});

			return () => {
				document.removeEventListener('mouseover', handleRenderOnHover);
			};
		}
	}, []);

	return null;
};

export default RenderCursor;
