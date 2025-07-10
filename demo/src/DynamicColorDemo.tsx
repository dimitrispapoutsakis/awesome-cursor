import { Alert, Box, Card, Grid, Typography } from '@mui/material';

const DynamicColorDemo = () => {
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
					<Typography variant="h3">Dynamic Color</Typography>
					<Alert severity="info">
						Be it dark / light theme, <strong>AwesomeCursor</strong> adapts
						excellently.
					</Alert>
				</Grid>
				<Grid container justifyContent="center" alignItems="center">
					<Grid>
						<Card
							sx={{
								p: 2,
								backgroundColor: '#fff',
								width: '300px',
								height: '150px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography style={{ color: 'black' }} variant="h4">
								Hover me
							</Typography>
						</Card>
					</Grid>
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

export default DynamicColorDemo;
