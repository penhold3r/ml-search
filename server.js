const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const { consoleLog } = require('./utils/console-log')

const app = express()

// React app cliente
app.use(express.static(path.join(__dirname, 'client/build')))

// Api endpoint
app.get('/api/items', (req, res) => {
	consoleLog(['PARAMS: ', req.query.q])

	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`)
		.then(resp => resp.json())
		.then(data => {
			const [categories] = data.filters.map(
				filter => filter.id === 'category' && filter.values.map(val => val.name)
			)

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
					free_shipping: result.shipping.free_shipping
				}
				return item
			})
			res.json({
				author: {
					name: '',
					lastname: ''
				},
				categories,
				items
			})
			consoleLog('Search...')
		})
		.catch(error => {
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
