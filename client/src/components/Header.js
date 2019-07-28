import React from 'react'
import { Link } from 'react-router-dom'

import SearchBox from './SearchBox'

const Header = () => {
	return (
		<header className="main-header">
			<h1 className="logo">
				<Link to="/">Mercado Libre</Link>
			</h1>
			<SearchBox />
		</header>
	)
}

export default Header
