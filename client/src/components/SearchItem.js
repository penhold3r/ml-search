import React from 'react'
import { Link } from 'react-router-dom'

import shippingIcon from '../images/free-shiping-icon.png'

const SearchItem = ({ item, breadcrumbs }) => {
	return (
		<div className="search-item d-flex mb-4">
			<Link
				to={{
					pathname: `/item/${item.id}`,
					state: {
						breadcrumbs
					}
				}}
				className="search-item__image bg-gray rounded overflow-hidden mr-4 "
			>
				<img src={item.picture} alt="[ imagen ]" />
			</Link>
			<div className="search-item__content flex-grow-1">
				<h4 className="price mb-3">
					<Link
						to={{
							pathname: `/item/${item.id}`,
							state: {
								breadcrumbs
							}
						}}
						className="text-body"
					>
						<strong>
							{item.price.decimals.toString() === '0.00'
								? '$ ' + item.price.amount
								: '$ ' + item.price.amount + item.price.decimals}
						</strong>
					</Link>

					{item.free_shipping && (
						<span className="shipping d-inline-block mx-2">
							<img src={shippingIcon} alt="Free shipping" />
						</span>
					)}
				</h4>
				<h3 className="title pt-3">
					<strong>{item.title}</strong>
				</h3>
			</div>
			<div className="search-item__location w-25">
				<h5 className="city">{item.location}</h5>
			</div>
		</div>
	)
}

export default SearchItem
