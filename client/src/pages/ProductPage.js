import React, { useState, useEffect } from 'react'

import Breadcrumbs from '../components/Breadcrumbs'

const ProductPage = ({ match, location }) => {
	const [id, setId] = useState('')
	const [product, setProduct] = useState({})

	id !== match.params.id && setId(match.params.id)

	useEffect(() => {
		console.log('fetching...')

		id &&
			fetch(`/api/item/${id}`)
				.then(resp => resp.json())
				.then(product => setProduct(product))
	}, [id])

	return (
		<section className="product container">
			<Breadcrumbs breadcrumbs={location.state.breadcrumbs} />
			<div className="product__body bg-white rounded p-4">
				{Object.getOwnPropertyNames(product).length && (
					<>
						<div className="product-image">
							<img src={product.item.pictures[0]} alt="" />
						</div>
						<div className="product-data">
							<div className="status">{product.item.condition}</div>
							<h3 className="title">{product.item.title}</h3>
							<h4 className="price">
								<strong>
									{product.item.price.decimals.toString() === '0.00'
										? '$ ' + product.item.price.amount
										: '$ ' + product.item.price.amount + product.item.price.decimals}
								</strong>
							</h4>
						</div>
						<div className="description">
							<p dangerouslySetInnerHTML={{ __html: product.description }} />
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default ProductPage
