import DomHelper from '@helpers/DomHelper';
import state from '@helpers/State';
import { useCallback, useEffect, useMemo } from 'react';
import { useGlobal } from './GlobalProvider';

const TextCursor = () => {
	const {
		color,
		setTextCursorStyle,
		setButtonCursorStyle,
		setIsTextCursor,
		isTextCursor,
	} = useGlobal();
	const domHelper = useMemo(() => new DomHelper(), []);

	const handleTextCursor = useCallback(() => {
		const { height: hoveringTextElHeight } = domHelper.getHoveringTextElInfo(
			state.cursorX,
			state.cursorY,
		);

		if (hoveringTextElHeight) {
			if (!isTextCursor) {
				setIsTextCursor(true);
				setTextCursorStyle({
					width: '3.5px',
					height: hoveringTextElHeight,
					borderRadius: '15px',
					backgroundColor: color,
				});
				setButtonCursorStyle({});
			}
		} else {
			if (isTextCursor) {
				setIsTextCursor(false);
				setTextCursorStyle({});
			}
		}
	}, [
		isTextCursor,
		color,
		setIsTextCursor,
		setTextCursorStyle,
		setButtonCursorStyle,
	]);

	const handleMouseMove = useCallback(() => {
		if (!state.iosPointerActive) {
			handleTextCursor();
		}
	}, [handleTextCursor]);

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove, { passive: true });

		// Cleanup: remove the listener when component unmounts or handleMouseMove changes
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [handleMouseMove]);

	return null;
};

export default TextCursor;
