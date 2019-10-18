import React from "react"
import { Typography } from "@material-ui/core"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"

export default function Home() {
	return (
		<>
			<HeroSection>
				<Typography variant="h1">Welcome To The Show</Typography>
			</HeroSection>
			<Section>
				<Typography>Another</Typography>
			</Section>
			<Section>
				<Typography>Another</Typography>
			</Section>
		</>
	)
}
