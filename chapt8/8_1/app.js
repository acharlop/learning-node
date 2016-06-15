var express = require("express")

var app = express()

app.use(function(req, res, next) { // request, response, next function in chain
	console.log(`${req.method} request for ${req.url}`)
	next()
})

app.use(express.static("./public"))

app.listen(3001)

console.log("Express app running on port 3001")

module.exports = app