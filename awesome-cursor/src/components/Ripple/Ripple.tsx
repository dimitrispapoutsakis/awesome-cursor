import { isDarkEl } from '@utils/ui.util';
import type { CSSProperties } from 'react';
import rippleStyle from './Ripple.module.scss';

interface IRipple {
	x: number;
	y: number;
	animationDuration: number;
	rippleColor?: string;
}

const Ripple = ({ x, y, animationDuration, rippleColor }: IRipple) => {
	const hoveredEl = document.elementFromPoint(x, y) as HTMLElement;
	const bgColor = isDarkEl(hoveredEl)
		? 'rgba(255, 255, 255, 0.8)'
		: 'rgba(21, 28, 35, 0.8)';

	return (
		<div
			style={
				{
					'--bg-color': rippleColor || bgColor,
					'--animation-duration': `${animationDuration}ms`,
				} as CSSProperties
			}
			className={rippleStyle.ripple}
		/>
	);
};

export default Ripple;
