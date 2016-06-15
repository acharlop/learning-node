var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()

var skierTerms = [
	{
		term: "Rip",
		defined: "To move at a high rate of speed"
	},
	{
		term: "Huck",
		defined: "To throw your body off of something, usually a natural feature like a cliff"
	},
	{
		term: "Chowder",
		defined: "Powder after it has been sufficiently skied"
	}
]

// all parsing the app needs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// first custom plugin to console log
// request, response, next function in chain
app.use(function(req, res, next) { 
	console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`)
	next()
})

// main app firing
app.use(express.static("./public"))

// cross domain usage of api not public folder
app.use(cors())

// get route
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms)
})

// post route
app.post("/dictionary-api", function(req, res) {
	skierTerms.push(req.body)
	res.json(skierTerms)
})

// delete route using route param
// filter out request param term from object and return
app.delete("/dictionary-api/:term", function(req, res) {
	skierTerms = skierTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.term.toLowerCase()
	})
	res.json(skierTerms)
})

app.listen(3001)

console.log("Express app running on port 3001")

module.exports = app