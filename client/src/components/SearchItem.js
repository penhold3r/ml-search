import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Price from './Price'

import shippingIcon from '../images/free-shiping-icon.png'

const SearchItem = ({ item, breadcrumbs, last }) => (
	<div
		className={`search-item d-flex flex-wrap flex-md-nowrap p-100 ${!last &&
			'border-bottom border-gray-light'}`}
	>
		<Link
			to={{
				pathname: `/item/${item.id}`,
				state: {
					breadcrumbs
				}
			}}
			className="search-item__image bg-gray rounded overflow-hidden mr-100 "
		>
			<img src={item.picture} alt="[ imagen ]" />
		</Link>
		<div className="search-item__content d-flex flex-column flex-grow-1">
			<h3 className="title order-2 mt-0 mb-100 m-md-0">
				<strong>{item.title}</strong>
			</h3>
			<h4 className="price order-1 mb-100 mb-md-200">
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
						<Price amount={item.price.amount} decimals={item.price.decimals} />
					</strong>
				</Link>

				{item.free_shipping && (
					<span className="shipping d-inline-block mx-75 position-relative">
						<img src={shippingIcon} alt="Free shipping" />
					</span>
				)}
			</h4>
		</div>
		<div className="search-item__location w-25">
			<h5 className="city">{item.location}</h5>
		</div>
	</div>
)

SearchItem.propTypes = {
	item: PropTypes.object,
	breadcrumbs: PropTypes.array,
	last: PropTypes.bool
}

export default SearchItem
