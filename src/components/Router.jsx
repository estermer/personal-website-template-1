import React, { Suspense, lazy } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import ScrollToTop from "./ScrollToTop"
import Footer from "./Footer"
import Home from "../pages/Home"
const PageTemplate = lazy(() => import("../pages/PageTemplate"))

export default function Router() {
	return (
		<BrowserRouter>
			<div>
				<Nav />
				<Suspense fallback={null}>
					<Switch>
						<Route path="/about">
							<PageTemplate />
						</Route>
						<Route path="/team">
							<PageTemplate />
						</Route>
						<Route path="/news">
							<PageTemplate />
						</Route>
						<Route component={Home} path="/" />
					</Switch>
				</Suspense>
				<ScrollToTop />
				<Footer />
			</div>
		</BrowserRouter>
	)
}
