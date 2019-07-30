import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Link from './Link'
import SearchBox from './SearchBox'

import logo from '../images/mercado-libre-logo.png'

const Header = ({ history }) => {
	const { pathname } = history.location

	const homePage = pathname === '/' ? ' full' : ''

	return (
		<header className={`main-header bg-brand-color fixed-top${homePage}`}>
			<div className="container my-auto">
				<nav className="navbar justify-content-start">
					<h1 className="logo navbar-brand m-0 p-0">
						<Link to="/">
							<img src={logo} alt="Mercado Libre" />
						</Link>
					</h1>
					<SearchBox className="search-form form-inline flex-grow-1 ml-150" />
				</nav>
			</div>
		</header>
	)
}

Header.propTypes = {
	history: PropTypes.object
}
export default withRouter(Header)
