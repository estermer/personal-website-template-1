import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Fab, Zoom, useScrollTrigger } from "@material-ui/core"
import { MdKeyboardArrowUp as UpArrowIcon } from "react-icons/md"

const useStyles = makeStyles(theme => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(3),
		right: theme.spacing(3),
	},
}))

export default function ScrollToTop() {
	const classes = useStyles()
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	})

	const handleClick = event => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor",
		)

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}

	return (
		<Zoom in={trigger}>
			<div
				onClick={handleClick}
				role="presentation"
				className={classes.root}>
				<Fab
					color="secondary"
					size="small"
					aria-label="scroll back to top">
					<UpArrowIcon size="2em" />
				</Fab>
			</div>
		</Zoom>
	)
}
