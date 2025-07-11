import { Alert, Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import burgerImg from '@img/burger.jpg';
import pizzaImg from '@img/pizza.jpg';

const CursorFollowDemo = () => {
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
					<Typography variant="h3">Follow</Typography>
					<Alert severity="info">
						A popup follows the cursor, great for previews.
					</Alert>
				</Grid>
				<Grid container justifyContent="center" alignItems="center">
					<Grid>
						<Card
							sx={{
								p: 2,
								backgroundColor: '#151c23',
								width: '300px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CardMedia
								component="img"
								height="400"
								image={burgerImg}
								alt="Burger"
								data-cursor-follow-text="A juicy burger with melted cheese"
							/>
						</Card>
					</Grid>

					<Grid>
						<Card
							sx={{
								p: 2,
								backgroundColor: '#151c23',
								width: '300px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CardMedia
								component="img"
								height="400"
								image={pizzaImg}
								alt="Pizza"
								data-cursor-follow-text="Delicious pizza dish, served daily!"
							/>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CursorFollowDemo;
