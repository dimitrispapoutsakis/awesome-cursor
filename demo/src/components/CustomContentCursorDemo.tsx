import { Alert, Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import skewersBg from '@img/skewers.jpg';

const CustomContentCursorDemo = () => {
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
					<Typography variant="h3">Custom Content Cursor</Typography>
					<Alert severity="info">
						Renders custom content, flexibility and great UX!
					</Alert>
				</Grid>
				<Grid container justifyContent="center" alignItems="center">
					<Grid>
						<Card
							sx={{
								p: 2,
								backgroundColor: '#151c23',
								width: '600px',
								height: '250px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CardMedia
								className="awesome-cursor-anchor"
								component="img"
								height="194"
								image={skewersBg}
								alt="Skewers dish"
							/>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CustomContentCursorDemo;
