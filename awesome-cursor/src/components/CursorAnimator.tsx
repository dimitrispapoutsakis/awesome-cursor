import State from '@helpers/State';
import { useCallback, useEffect } from 'react';

const CursorAnimator = () => {
	// const { awesomeCursorEl } = useGlobal();
	const animate = useCallback(() => {
		State.cursorX += State.mouseX - State.cursorX;
		State.cursorY += State.mouseY - State.cursorY;
		if (!State.iosPointerActive) {
			(State.awesomeCursorEl as HTMLElement).style.transform =
				`translate3d(${State.cursorX}px, ${State.cursorY}px, 0)`;
		}
	}, []);

	/* const initErrorHandler = useCallback(() => {
		const errorHandler = new ErrorHandler();
		errorHandler.setColorProp(color as string);
		errorHandler.setDynamicColorProp(dynamicColor);
		errorHandler.init();
	}, [color, dynamicColor]); */

	const handleMousePositioning = useCallback((e: MouseEvent) => {
		State.mouseX = e.clientX;
		State.mouseY = e.clientY;
		animate();
	}, []);

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			(e) => {
				handleMousePositioning(e);
			},
			{ passive: true },
		);
	}, []);

	return null;
};

export default CursorAnimator;
