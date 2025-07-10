import './AwesomeCursor.module.scss';
import CursorAnimator from './CursorAnimator';
import DynamicColor from './DynamicColor';
import { GlobalProvider } from './GlobalProvider';
import IosPointerCursor from './IosPointerCursor';
import RenderCursor from './RenderCursor';
import SideEffects from './SideEffects';
import TextCursor from './TextCursor';

export interface IAwesomeCursor {
	color?: string;
	textColor?: string;
	dynamicColor?: boolean;
	ripple?: boolean;
	rippleColor?: string;
	renderOnHover?: string | React.ReactNode[];
	anchorEl?: string;
	iosPointerAnchorEl?: string;
}

const AwesomeCursor = (props: IAwesomeCursor) => {
	const {
		color = 'cyan',
		textColor = 'white',
		dynamicColor = true,
		ripple = true,
		rippleColor,
		renderOnHover,
		anchorEl,
		iosPointerAnchorEl,
	} = props;

	return (
		<GlobalProvider
			color={color}
			textColor={textColor}
			dynamicColor={dynamicColor}
			ripple={ripple}
			rippleColor={rippleColor}
			renderOnHover={renderOnHover}
			anchorEl={anchorEl}
			iosPointerAnchorEl={iosPointerAnchorEl}
		>
			<SideEffects />
			<CursorAnimator />
			<DynamicColor />
			<TextCursor />
			<RenderCursor />
			<IosPointerCursor />
		</GlobalProvider>
	);
};

export default AwesomeCursor;
