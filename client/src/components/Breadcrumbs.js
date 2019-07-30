import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ breadcrumbs }) => (
	<nav aria-label="breadcrumb">
		<ul className="breadcrumb bg-transparent px-0 py-100 m-0">
			{breadcrumbs.length
				? breadcrumbs.map((item, key, arr) => {
						return arr.length - 1 === key ? (
							<li className="breadcrumb-item text-gray active" key={key}>
								<strong>{item}</strong>
							</li>
						) : (
							<li className="breadcrumb-item text-gray" key={key}>
								{item}
							</li>
						)
				  })
				: '...'}
		</ul>
	</nav>
)

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array
}

export default Breadcrumbs
