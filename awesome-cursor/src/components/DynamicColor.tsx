import { darkBunker } from '@constants/css';
import state from '@helpers/State';
import { isDarkEl } from '@utils/ui.util';
import { useCallback, useEffect } from 'react';
import { useGlobal } from './GlobalProvider';

const DynamicColor = () => {
	const { dynamicColor, color, setAppliedColor } = useGlobal();

	const handleDynamicColor = useCallback(() => {
		const hoveringEl = document.elementFromPoint(
			state.mouseX,
			state.mouseY,
		) as HTMLElement;

		if (dynamicColor) {
			const darkEl = isDarkEl(hoveringEl);
			setAppliedColor(darkEl ? '#ccc' : darkBunker);
		} else {
			setAppliedColor(color as string);
		}
	}, [dynamicColor, color]);

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			() => {
				handleDynamicColor();
			},
			{ passive: true },
		);

		return () => {
			document.removeEventListener('mousemove', handleDynamicColor);
		};
	}, []);

	return null;
};

export default DynamicColor;
