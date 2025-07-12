import { useCallback, useEffect, useState } from 'react';
import { useGlobal } from './GlobalProvider';
import { isDarkTheme } from '@/utils/ui.util';
import { TTheme } from '@/typings';
import {
	bezierButter,
	darkBunker,
	materialBoxShadowMd,
	whiteAlto,
} from '@/constants/css';
import followCursorStyle from './FollowCursor.module.scss';

const FollowCursor = () => {
	const { setFollowPopupVisible, followPopupVisible, theme } = useGlobal();
	const [followText, setFollowText] = useState<string | null>('');

	const handleFollowCursor = useCallback((e: MouseEvent) => {
		const hoveringEl = e.target as HTMLElement;
		const followTextAttr = hoveringEl.getAttribute('data-cursor-follow-text');

		if (followTextAttr) {
			setFollowText(followTextAttr);
			setFollowPopupVisible(true);
		} else {
			setFollowPopupVisible(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			(e) => {
				handleFollowCursor(e);
			},
			{ passive: true },
		);

		return () => {
			document.removeEventListener('mousemove', handleFollowCursor);
		};
	}, []);

	return followPopupVisible ? (
		<div
			className={followCursorStyle.followCursor}
			style={{
				backgroundColor: isDarkTheme(theme as TTheme) ? darkBunker : whiteAlto,
				color: isDarkTheme(theme as TTheme) ? 'white' : 'black',
				borderRadius: '15px',
				// fontSize: '11px',
				padding: '5px 7px',
				boxShadow: materialBoxShadowMd,
			}}
		>
			{followText}
		</div>
	) : null;
};

export default FollowCursor;
