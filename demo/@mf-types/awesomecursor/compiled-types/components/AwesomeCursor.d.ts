import { TTheme } from '@/typings';
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
}
declare const AwesomeCursor: (props: IAwesomeCursor) => import("react/jsx-runtime").JSX.Element;
export default AwesomeCursor;
