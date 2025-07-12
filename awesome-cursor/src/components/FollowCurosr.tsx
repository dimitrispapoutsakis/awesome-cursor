import { useCallback, useEffect, useState } from 'react';
import { useGlobal } from './GlobalProvider';
import { isDarkTheme } from '@/utils/ui.util';
import { TTheme } from '@/typings';
import { darkBunker, materialBoxShadowMd, whiteAlto } from '@/constants/css';
/* @ts-ignore */
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

	const mouseMoveListener = useCallback((e: MouseEvent) => {
		handleFollowCursor(e);
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', mouseMoveListener, {
			passive: true,
		});

		return () => {
			document.removeEventListener('mousemove', mouseMoveListener);
		};
	}, []);

	return followPopupVisible ? (
		<div
			className={followCursorStyle.followCursor}
			style={{
				backgroundColor: isDarkTheme(theme as TTheme) ? darkBunker : whiteAlto,
				color: isDarkTheme(theme as TTheme) ? 'white' : 'black',
				borderRadius: '15px',
				padding: '5px 7px',
				boxShadow: materialBoxShadowMd,
			}}
		>
			{followText}
		</div>
	) : null;
};

export default FollowCursor;
