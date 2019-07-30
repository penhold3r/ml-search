import React from 'react'

import Layout from '../components/Layout'
import Link from '../components/Link'

const NotFoundPage = () => {
	return (
		<Layout pageTitle={'Error :('}>
			<section className="not-found container d-flex justify-content-center flex-column bg-white rounded p-200">
				<h2 className="text-center">404</h2>
				<p className="lead text-center">Algo salió mal :(</p>
				<Link to={'/'} className="btn btn-primary btn-lg px-200 mx-auto">
					Ok. lo entiendo
				</Link>
			</section>
		</Layout>
	)
}

export default NotFoundPage
