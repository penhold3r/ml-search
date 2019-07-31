import React from 'react'
import Link from './Link'

const Footer = () => {
	return (
		<footer className="site-footer d-flex bg-primary mt-200 p-200">
			<small className="mx-auto">
				<Link to="https://mercadolibre.com.ar/" className="text-white">
					Mercado Libre
				</Link>
			</small>
		</footer>
	)
}

export default Footer
