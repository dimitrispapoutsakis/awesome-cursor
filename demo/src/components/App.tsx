import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AwesomeCursor } from 'awesomecursor';
// import Sidebar from './Sidebar';
import DynamicColorDemo from './DynamicColorDemo';
import TextCursorDemo from './TextCursorDemo';
import CustomContentCursorDemo from './CustomContentCursorDemo';
import IosPointerDemo from './IosPointerDemo';
import CursorFollowDemo from './CursorFollowDemo';

// Create dark theme
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<AwesomeCursor
				dynamicColor={true}
				renderOnHover="View Gallery"
				anchorEl=".awesome-cursor-anchor"
				textColor="black"
				iosPointerAnchorEl="button"
				follow
				theme="dark"
				gestures={{
					scrollToTop: {
						// active: true,
						onScrollEnd: () => {
							console.log('scroll top end');
						},
					},
					scrollToBottom: {
						// active: true,
						onScrollEnd: () => {
							console.log('scroll bottom end');
						},
					},
				}}
			/>

			<Grid
				container
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Grid sx={{ m: 2 }}>
					<DynamicColorDemo />
				</Grid>
				<Grid sx={{ m: 2 }}>
					<TextCursorDemo />
				</Grid>
				<Grid sx={{ m: 2 }}>
					<CustomContentCursorDemo />
				</Grid>
				<Grid sx={{ m: 2 }}>
					<IosPointerDemo />
				</Grid>
				<Grid sx={{ m: 2 }}>
					<CursorFollowDemo />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
