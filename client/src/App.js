import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'

import IndexPage from './pages/IndexPage'
import SearchResultsPage from './pages/SearchResultsPage'
import ProductPage from './pages/ProductPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Header />
				<Switch>
					<Route exact path="/" component={IndexPage} />
					<Route path="/items" component={SearchResultsPage} />
					<Route path="/item/:id" component={ProductPage} />
					<Route path="/404" component={NotFoundPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default App
