import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../sass/index.scss'

import ICO from '../images/favicon.ico'
import PNG from '../images/favicon.png'

const Layout = ({ pageTitle, children }) => {
	const title = 'Mercado Libre'
	const siteTitle = pageTitle ? `${pageTitle} - ${title}` : title
	return (
		<>
			<Helmet
				htmlAttributes={{ lang: 'es' }}
				title={siteTitle}
				meta={[
					{
						name: 'description',
						content: 'La comunidad de compra y venta online más grande de América Latina.'
					}
				]}
				link={[
					{
						href: ICO,
						rel: 'shortcut icon',
						type: 'image/x-icon'
					},
					{
						href: PNG,
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32 192x192'
					},
					{
						href: '/fonts/fonts.min.css',
						rel: 'stylesheet',
						foo: 'Bar'
					}
				]}
			/>
			{children}
		</>
	)
}

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Layout
