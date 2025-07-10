interface IRipple {
	x: number;
	y: number;
	animationDuration: number;
	rippleColor?: string;
}
declare const Ripple: ({
	x,
	y,
	animationDuration,
	rippleColor,
}: IRipple) => import('react/jsx-runtime').JSX.Element;
export default Ripple;
