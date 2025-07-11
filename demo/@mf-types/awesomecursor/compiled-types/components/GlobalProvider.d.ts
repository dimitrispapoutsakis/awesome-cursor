import { type CSSProperties, type ReactNode } from 'react';
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
export declare const GlobalProvider: ({ children, ...props }: IGlobalProvider) => import("react/jsx-runtime").JSX.Element;
export declare const useGlobal: () => IUseGlobal;
export {};
