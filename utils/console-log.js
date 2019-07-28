module.exports = {
	consoleLog: msg => {
		process.env.NODE_ENV === 'development' && console.log(msg)
	}
}
