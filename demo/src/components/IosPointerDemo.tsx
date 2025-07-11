import { Alert, Badge, Box, Card, Grid, Typography } from '@mui/material';

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
					<Typography variant="h3">iOS Pointer</Typography>
					<Alert severity="info">Add a premium look to your elements!</Alert>
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
							<button
								type="button"
								style={{
									backgroundColor: 'transparent',
									border: 'none',
									color: 'black',
									fontSize: '16px',
									fontWeight: 'bold',
									padding: '10px 20px',
								}}
							>
								<span>Appearance</span>
							</button>
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
							<button
								type="button"
								style={{
									backgroundColor: 'transparent',
									border: 'none',
									color: 'white',
									fontSize: '16px',
									fontWeight: 'bold',
									padding: '10px 20px',
								}}
							>
								<span>Appearance</span>
							</button>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DynamicColorDemo;
