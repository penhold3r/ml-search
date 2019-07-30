import React from 'react'

const Price = ({ amount, decimals }) => {
	const formatter = new Intl.NumberFormat('es-ES')
	const price = formatter.format(amount)

	const cents =
		decimals === '0.00' ? (
			''
		) : (
			<sup
				className="cents"
				style={{
					margin: '0 0 0 0.25rem',
					top: '-0.5em',
					fontSize: '60%',
					textDecoration: 'underline'
				}}
			>
				{decimals.substring(2)}
			</sup>
		)

	return (
		<span className="price">
			<span className="symbol">$</span>
			<span>&ensp;</span>
			<span className="amount">{price}</span>
			{cents}
		</span>
	)
}

export default Price
