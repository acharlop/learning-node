var http = require("http")

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"})

	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`)

})

server.listen(3001)

console.log("Server Listening on port 3001")