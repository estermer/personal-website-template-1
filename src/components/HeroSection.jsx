import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	heroSection: {
		display: "flex",
		height: "92vh",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: theme.palette.primary.contrastText,
		backgroundColor: "transparent",
	},
}))

export default function Home({ children }) {
	const classes = useStyles()

	return <section className={classes.heroSection}>{children}</section>
}
