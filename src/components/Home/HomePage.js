import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	CssBaseline,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	button: {
		width: "100%",
	},
}));

const HomePage = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="primary"
							// color="textPrimary"
							gutterBottom
						>
							Welcome To <br /> Cook @ Home
						</Typography>
						<Typography
							variant="h5"
							align="center"
							// color="primary"
							color="textSecondary"
							paragraph
						>
							Modi impedit quis nostrum dolorem nam. Voluptatem
							recusandae omnis voluptatem veritatis quia
							consequatur. Et eligendi minus voluptates beatae
							aliquam dolor quos voluptates.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item xs={9} sm={5}>
									<Button
										component={Link}
										to="/auth/signin"
										variant="contained"
										color="primary"
										className={classes.button}
									>
										Sign In
									</Button>
								</Grid>
								<Grid item xs={9} sm={5}>
									<Button
										component={Link}
										to="/auth/signup"
										variant="outlined"
										color="primary"
										className={classes.button}
									>
										Register
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
};

export default HomePage;
