import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AwesomeCursor } from 'awesomecursor';
// import Sidebar from './Sidebar';
import DynamicColorDemo from './DynamicColorDemo';
import TextCursorDemo from './TextCursorDemo';
import CustomContentCursorDemo from './CustomContentCursorDemo';
import IosPointerDemo from './IosPointerDemo';

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
			</Grid>
		</ThemeProvider>
	);
};

export default App;
