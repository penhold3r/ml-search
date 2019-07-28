import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

const SearchResultsPage = ({ location }) => {
	const [params, setParams] = useState({})
	const [results, setResults] = useState([])

	params.search !== queryString.parse(location.search).search &&
		setParams(queryString.parse(location.search))

	useEffect(() => {
		console.log('searching...')

		Object.getOwnPropertyNames(params).length &&
			fetch(`/api/items?q=${params.search.replace(' ', '+')}`)
				.then(resp => resp.json())
				.then(({ items }) => setResults(items))
	}, [params])

	return (
		<section className="results">
			<h2>
				Resultados: <strong>{params.search}</strong>
			</h2>
			<div>
				{results.length &&
					results.map(item => (
						<div key={item.id}>
							<h3>{item.title}</h3>
						</div>
					))}
			</div>
		</section>
	)
}

export default SearchResultsPage
