import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import logo from "../assets/logo192.png"

const useStyles = makeStyles({
	appBarRoot: {
		backgroundColor: "transparent",
		boxShadow: "none",
	},
	desktopContainer: {
		display: "flex",
		justifyContent: "space-around",
		"& a": {
			color: "inherit",
			textDecoration: "none",
		},
	},
})

export default function Nav() {
	const classes = useStyles()
	const { pathname } = useLocation()
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	})

	return (
		<AppBar
			className={
				!scrollTrigger && pathname === "/" ? classes.appBarRoot : ""
			}
			position="sticky">
			<Toolbar id="back-to-top-anchor">
				<Container
					className={classes.desktopContainer}
					fixed
					maxWidth="md">
					<Typography component={Link} to="/" variant="h6">
						Home
					</Typography>
					<Typography component={Link} to="/about" variant="h6">
						About
					</Typography>
					<Link to="/">
						<img alt="logo" src={logo} height="30px" />
					</Link>
					<Typography component={Link} to="/team" variant="h6">
						Team
					</Typography>
					<Typography component={Link} to="/news" variant="h6">
						News
					</Typography>
				</Container>
			</Toolbar>
		</AppBar>
	)
}
