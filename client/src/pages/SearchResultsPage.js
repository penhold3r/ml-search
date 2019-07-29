import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

import SearchItem from '../components/SearchItem'
import Breadcrumbs from '../components/Breadcrumbs'

const SearchResultsPage = ({ location }) => {
	const [params, setParams] = useState({})
	const [breadcrumbs, setBreadcrumbs] = useState([])
	const [results, setResults] = useState([])

	params.search !== queryString.parse(location.search).search &&
		setParams(queryString.parse(location.search))

	useEffect(() => {
		console.log('searching...')

		Object.getOwnPropertyNames(params).length &&
			fetch(`/api/items?q=${params.search.replace(' ', '+')}`)
				.then(resp => resp.json())
				.then(({ categories, items }) => {
					const bc = [...categories, ...params.search.split(' ')]
					setResults(items)
					setBreadcrumbs(bc)
				})
	}, [params])

	return (
		<section className="results container">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="results__list bg-white rounded p-4">
				{results.length &&
					results.map(item => (
						<SearchItem key={item.id} breadcrumbs={breadcrumbs} item={item} />
					))}
			</div>
		</section>
	)
}

export default SearchResultsPage
