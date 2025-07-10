import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AwesomeCursor } from 'awesomecursor';
// import Sidebar from './Sidebar';
import DynamicColorDemo from '../DynamicColorDemo';

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
			<DynamicColorDemo />
			{/* <TextCursorDemo /> */}
		</ThemeProvider>
	);
};

export default App;
