import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

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
				<button className="input-group-append border-0 rounded-right py-2 px-3" type="submit">
					<img className="search-icon" src={searchIcon} alt="Buscar" />
				</button>
			</div>
		</form>
	)
}

export default withRouter(SearchBox)
