import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Link from './Link'
import SearchBox from './SearchBox'

import logo from '../images/mercado-libre-logo.png'

const Header = ({
	history: {
		location: { pathname }
	}
}) => {
	const isHome = pathname === '/'

	const homePage = isHome ? ' full' : ''

	return (
		<header className={`main-header bg-brand-color shadow-sm fixed-top${homePage}`}>
			<div className="container my-auto">
				<nav
					className={`navbar justify-content-start ${
						isHome ? 'flex-column flex-md-row' : 'flex-row'
					}`}
				>
					<h1
						className={`logo navbar-brand mr-0 mt-0 p-0 ${
							isHome ? 'mb-100 mb-md-0' : 'mb-0'
						}`}
					>
						<Link to="/">
							<img src={logo} alt="Mercado Libre" />
						</Link>
					</h1>
					<SearchBox
						className={`search-form shadow-sm form-inline flex-grow-1 ${
							isHome ? 'ml-md-150 w-100' : 'ml-150'
						}`}
					/>
				</nav>
			</div>
		</header>
	)
}

Header.propTypes = {
	history: PropTypes.object
}

export default withRouter(Header)
