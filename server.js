const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const { consoleLog } = require('./utils/console-log')

const app = express()

// React app cliente
app.use(express.static(path.join(__dirname, 'client/build')))

// Api endpoint busqueda
app.get('/api/items', (req, res) => {
	consoleLog(['PARAMS: ', req.query.q])

	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`)
		.then(resp => resp.json())
		.then(data => {
			const categories = data.filters.length
				? data.filters.map(
						filter =>
							filter.id === 'category' &&
							filter.values.map(val => val.path_from_root.map(cat => cat.name))
				  )[0][0]
				: []

			console.log('FILTERS_>', categories)

			const items = data.results.map(result => {
				const item = {
					id: result.id,
					title: result.title,
					price: {
						currency: result.currency_id,
						amount: Math.floor(result.price),
						decimals: (result.price % 1).toFixed(2)
					},
					picture: result.thumbnail,
					condition: result.condition,
					free_shipping: result.shipping.free_shipping,
					location: result.address.state_name
				}
				return item
			})
			res.json({
				author: {
					name: '',
					lastname: ''
				},
				categories: categories,
				items
			})
			consoleLog('Search...')
		})
		.catch(error => {
			consoleLog('Error :(', error)
			res.status(500).json({
				...error
			})
		})
})
// Api endpoint producto
app.get('/api/item/:id', (req, res) => {
	consoleLog(['PRODUCT ID: ', req.params.id])

	const productData = fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
		.then(resp => resp.json())
		.then(product => {
			const item = {
				id: product.id,
				title: product.title,
				price: {
					currency: product.currency_id,
					amount: Math.floor(product.price),
					decimals: (product.price % 1).toFixed(2)
				},
				pictures: product.pictures.map(pic => pic.secure_url),
				condition: product.condition,
				free_shipping: product.shipping.free_shipping,
				sold_quantity: product.sold_quantity
			}
			return item
		})
		.catch(err => consoleLog('prod err: ', err))

	const descriptionData = fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
		.then(resp => resp.json())
		.then(({ plain_text }) => plain_text)
		.catch(err => consoleLog('desc err: ', err))

	Promise.all([productData, descriptionData])
		.then(data => {
			const [item, description] = data
			res.json({
				author: {
					name: '',
					lastname: ''
				},
				item,
				description
			})
			consoleLog('Search...')
		})
		.catch(error => {
			consoleLog('Error :(', error)
			res.status(500).json({
				...error
			})
		})
})

// Index cliente
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

consoleLog('App is listening on port -> ' + port)

consoleLog(process.env.NODE_ENV)
