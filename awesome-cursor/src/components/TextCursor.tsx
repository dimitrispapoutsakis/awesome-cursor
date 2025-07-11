import DomHelper from '@helpers/DomHelper';
import state from '@helpers/State';
import { useCallback, useEffect, useMemo } from 'react';
import { useGlobal } from './GlobalProvider';

const TextCursor = () => {
	const { color, setTextCursorStyle, setButtonCursorStyle, setIsTextCursor } =
		useGlobal();
	const domHelper = useMemo(() => new DomHelper(), []);
	const handleTextCursor = useCallback(() => {
		const { height: hoveringTextElHeight } = domHelper.getHoveringTextElInfo(
			state.cursorX,
			state.cursorY,
		);

		if (hoveringTextElHeight) {
			setTextCursorStyle({
				width: '3.5px',
				height: hoveringTextElHeight,
				borderRadius: '15px',
				backgroundColor: color,
			});
			setButtonCursorStyle({});
		} else {
			setIsTextCursor(false);
			setTextCursorStyle({});
		}
	}, []);

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			() => {
				if (!state.iosPointerActive) {
					handleTextCursor();
				}
			},
			{ passive: true },
		);
	}, []);

	return null;
};

export default TextCursor;
