import { Alert, Box, Card, Grid, Typography } from '@mui/material';

const TextCursorDemo = () => {
	return (
		<Box>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Grid
					container
					sx={{ m: 2 }}
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<Typography variant="h3">Text Cursor</Typography>
					<Alert severity="info">Transforms when hovering over text</Alert>
				</Grid>
				<Grid container justifyContent="center" alignItems="center">
					<Grid>
						<Card
							sx={{
								p: 2,
								backgroundColor: '#151c23',
								width: '300px',
								height: '150px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography variant="h4">Hover me</Typography>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default TextCursorDemo;
