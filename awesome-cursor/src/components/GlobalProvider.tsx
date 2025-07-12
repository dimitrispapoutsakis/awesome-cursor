import Ripple from '@components/Ripple/Ripple';
import { rippleAnimationDuration } from '@constants/generic';
import state from '@helpers/State';
import {
	type CSSProperties,
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { bezierButter } from '@/constants/css';
import { TTheme } from '@/typings';

interface IUseGlobal {
	appliedColor: string;
	setAppliedColor: (color: string) => void;
	color?: string;
	textColor?: string;
	dynamicColor?: boolean;
	ripple?: boolean;
	rippleColor?: string;
	renderOnHover?: string | React.ReactNode[];
	anchorEl?: string;
	iosPointerAnchorEl?: string;
	setTextCursorStyle: (style: CSSProperties) => void;
	setButtonCursorStyle: (style: CSSProperties) => void;
	isTextCursor?: boolean;
	setIsTextCursor: (isTextCursor: boolean) => void;
	setRenderButtonCursor: (renderButtonCursor: boolean) => void;
	hoveringIosPointerStyle?: CSSProperties;
	textCursorStyle?: CSSProperties;
	buttonCursorStyle?: CSSProperties;
	rippleAnimationDuration?: number;
	setHasClicked: (hasClicked: boolean) => void;
	setHoveringIosPointerStyle: (style: CSSProperties) => void;
	ripples: React.ReactNode[];
	setRipples: (ripples: React.ReactNode[]) => void;
	rippleIndex: number;
	setRippleIndex: (index: number) => void;
	follow?: boolean;
	followPopupVisible?: boolean;
	setFollowPopupVisible: (visible: boolean) => void;
	theme?: TTheme;
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

interface IGlobalProvider {
	children: ReactNode;
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
}

export const GlobalProvider = ({ children, ...props }: IGlobalProvider) => {
	const {
		color,
		textColor,
		dynamicColor,
		ripple,
		rippleColor,
		renderOnHover,
		anchorEl,
		iosPointerAnchorEl,
		follow,
		theme,
	} = props;
	const [awesomeCursorEl, setAwesomeCursorEl] = useState<HTMLElement | null>(
		null,
	);
	console.log('rendering');
	const [appliedColor, setAppliedColor] = useState('');
	const [hasClicked, setHasClicked] = useState(false);
	const [awesomeCursorInnerEl, setAwesomeCursorInnerEl] =
		useState<HTMLElement | null>(null);
	const [isTextCursor, setIsTextCursor] = useState(false);
	const [textCursorStyle, setTextCursorStyle] = useState<CSSProperties>({});
	const [buttonCursorStyle, setButtonCursorStyle] = useState<CSSProperties>({});
	const [renderButtonCursor, setRenderButtonCursor] = useState(false);
	const [ripples, setRipples] = useState<React.ReactNode[]>([]);
	const [rippleIndex, setRippleIndex] = useState(0);
	const [followPopupVisible, setFollowPopupVisible] = useState(false);

	const [hoveringIosPointerStyle, setHoveringIosPointerStyle] =
		useState<CSSProperties>({});

	useEffect(() => {
		state.awesomeCursorEl = document.getElementById(
			'awesome-cursor',
		) as HTMLElement;
		state.awesomeCursorInnerEl = document.getElementById(
			'awesome-cursor-inner',
		) as HTMLElement;
	}, []);

	const value: IUseGlobal = {
		appliedColor,
		setAppliedColor,
		color,
		textColor,
		dynamicColor,
		ripple,
		rippleColor,
		renderOnHover,
		anchorEl,
		iosPointerAnchorEl,
		setTextCursorStyle,
		setButtonCursorStyle,
		isTextCursor,
		setIsTextCursor,
		hoveringIosPointerStyle,
		textCursorStyle,
		buttonCursorStyle,
		setRenderButtonCursor,
		setHasClicked,
		setHoveringIosPointerStyle,
		ripples,
		setRipples,
		rippleIndex,
		setRippleIndex,
		follow,
		followPopupVisible,
		setFollowPopupVisible,
		theme,
	};

	return (
		<GlobalContext.Provider value={value}>
			{/* biome-ignore-start lint/nursery/useUniqueElementIds: reason */}
			<div
				id="awesome-cursor"
				style={{
					position: 'fixed',
					zIndex: 999999999,
					willChange: 'transform',
					pointerEvents: 'none',
					transformOrigin: '50% 50% 0px',
					contain: 'layout',
				}}
			>
				{/* biome-ignore-start lint/nursery/useUniqueElementIds: reason */}
				<div
					id="awesome-cursor-inner"
					style={{
						backgroundColor: appliedColor,
						width: '18px',
						height: '18px',
						borderRadius: '50%',
						zIndex: -1,
						pointerEvents: 'none',
						transition: `padding .25s ${bezierButter}, transform .15s ${bezierButter}, border-radius .15s ${bezierButter}, width .25s ${bezierButter}, height .25s ${bezierButter}, background-color .25s ${bezierButter}`,
						transformOrigin: 'center',
						transform: 'translate(-50%, -50%)',
						color: textColor,
						...textCursorStyle,
						...buttonCursorStyle,
						...hoveringIosPointerStyle,
					}}
				>
					{renderButtonCursor && <span>{renderOnHover}</span>}
					{hasClicked &&
						ripple &&
						!state.iosPointerActive &&
						ripples.map((_, i: number) => (
							<Ripple
								key={`awesome-cursor-ripple-${i}`}
								x={state.cursorX}
								y={state.cursorY}
								animationDuration={rippleAnimationDuration}
								rippleColor={rippleColor}
							/>
						))}
				</div>
				{children}
			</div>
		</GlobalContext.Provider>
	);
};

export const useGlobal = (): IUseGlobal => {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error('useGlobal must be used within a GlobalProvider');
	}
	return context;
};
