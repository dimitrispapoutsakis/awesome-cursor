import { AwesomeCursor } from 'awesomecursor';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

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
		</ThemeProvider>
	);
};

export default App;
