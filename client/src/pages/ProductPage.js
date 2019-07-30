import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Breadcrumbs from '../components/Breadcrumbs'
import Price from '../components/Price'

const ProductPage = ({ match, location }) => {
	const [id, setId] = useState('')
	const [product, setProduct] = useState({})

	const breadcrumbs = location.state ? location.state.breadcrumbs : [``]

	id !== match.params.id && setId(match.params.id)

	useEffect(() => {
		console.log('fetching...')

		id &&
			fetch(`/api/item/${id}`)
				.then(resp => resp.json())
				.then(product => setProduct(product))
	}, [id])

	console.log(product)

	return (
		<Layout pageTitle={Object.getOwnPropertyNames(product).length && product.item.title}>
			<section className="product container">
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<div className="product__body bg-white rounded p-200">
					{!Object.getOwnPropertyNames(product).length ? (
						<Loading />
					) : product.item.status === 404 ? (
						<Redirect to={'/404'} />
					) : (
						<>
							<div className="product-image">
								<img src={product.item.pictures[0]} alt="" />
							</div>
							<div className="product-data">
								<div className="status mb-100">
									<span>{product.item.condition === 'new' ? 'Nuevo' : 'Usado'}</span>

									<span> - {product.item.sold_quantity} Vendidos</span>
								</div>
								<h2 className="title mb-200">
									<strong>{product.item.title}</strong>
								</h2>
								<h3 className="price mb-200">
									<Price
										amount={product.item.price.amount}
										decimals={product.item.price.decimals}
									/>
								</h3>

								<button className="btn btn-primary btn-lg px-200">Comprar</button>
							</div>
							<div className="description mt-200">
								<h3 className="description__title">Descripción del producto</h3>
								<p dangerouslySetInnerHTML={{ __html: product.description }} />
							</div>
						</>
					)}
				</div>
			</section>
		</Layout>
	)
}

ProductPage.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object
}

export default ProductPage
