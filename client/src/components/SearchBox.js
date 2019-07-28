import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const SearchBox = ({ history }) => {
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
		<div className="search">
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="search"
					name="search"
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder="Nunca dejes de buscar..."
				/>
				<input type="submit" value="Buscar" />
			</form>
		</div>
	)
}

export default withRouter(SearchBox)
