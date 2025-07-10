import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AwesomeCursor } from 'awesomecursor';
// import Sidebar from './Sidebar';
import DynamicColorDemo from './DynamicColorDemo';
import TextCursorDemo from './TextCursorDemo';

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
			<AwesomeCursor />

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
			</Grid>
		</ThemeProvider>
	);
};

export default App;
