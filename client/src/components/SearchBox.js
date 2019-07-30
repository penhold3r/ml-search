import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import searchIcon from '../images/search-icon.png'

const SearchBox = ({ history, className }) => {
	const [query, setQuery] = useState('')

	const handleSubmit = e => {
		const q = query.replace(' ', '+')

		e.preventDefault()

		query &&
			history.push({
				pathname: '/items',
				search: 'search=' + q
			})
	}

	return (
		<form className={className} onSubmit={handleSubmit}>
			<div className="input-group w-100">
				<input
					type="search"
					name="search"
					className="form-control border-0"
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder="Nunca dejes de buscar..."
				/>
				<button
					className="input-group-append border-0 rounded-right py-050 px-100"
					type="submit"
				>
					<img className="search-icon" src={searchIcon} alt="Buscar" />
				</button>
			</div>
		</form>
	)
}

SearchBox.propTypes = {
	history: PropTypes.object,
	className: PropTypes.string
}

export default withRouter(SearchBox)
