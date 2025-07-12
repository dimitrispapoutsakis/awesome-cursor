import CursorAnimator from './CursorAnimator';
import DynamicColor from './DynamicColor';
import FollowCursor from './FollowCurosr';
import GestureCursor from './GestureCursor';
import { GlobalProvider } from './GlobalProvider';
import IosPointerCursor from './IosPointerCursor';
import RenderCursor from './RenderCursor';
import SideEffects from './SideEffects';
import TextCursor from './TextCursor';
import { IGestures, TTheme } from '@/typings';

export interface IAwesomeCursor {
	color?: string;
	textColor?: string;
	dynamicColor?: boolean;
	ripple?: boolean;
	rippleColor?: string;
	renderOnHover?: string | React.ReactNode[];
	anchorEl?: string;
	iosPointerAnchorEl?: string;
	follow?: boolean;
	theme?: TTheme;
	gestures?: IGestures;
}

const AwesomeCursor = (props: IAwesomeCursor) => {
	const {
		color = 'cyan',
		textColor = 'black',
		dynamicColor = true,
		ripple = true,
		rippleColor,
		renderOnHover,
		anchorEl,
		iosPointerAnchorEl,
		follow = false,
		theme = 'light',
		gestures = {
			scrollToTop: true,
			scrollToBottom: true,
		},
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
			follow={follow}
			theme={theme}
			gestures={gestures}
		>
			<SideEffects />
			<CursorAnimator />
			<DynamicColor />
			<TextCursor />
			<RenderCursor />
			<IosPointerCursor />
			{follow && <FollowCursor />}
			<GestureCursor />
		</GlobalProvider>
	);
};

export default AwesomeCursor;
