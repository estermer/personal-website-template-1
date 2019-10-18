import React from "react"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
	FaStrava as StravaIcon,
	FaPiedPiperHat as PiedPiperIcon,
	FaRunning as RunningIcon,
	FaLinkedinIn as LinkedinIcon,
	FaGithub as GithubIcon,
	FaFlickr as FlickrIcon,
} from "react-icons/fa"

const useStyles = makeStyles(theme => ({
	footer: {
		padding: `${theme.spacing(10)}px 0`,
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.background.dark,
	},
}))

export default function Footer() {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Container fixed maxWidth="md">
				<Typography>Footer</Typography>
				<FacebookIcon />
				<TwitterIcon />
				<StravaIcon />
				<PiedPiperIcon />
				<RunningIcon />
				<LinkedinIcon />
				<GithubIcon />
				<FlickrIcon />
			</Container>
		</footer>
	)
}
