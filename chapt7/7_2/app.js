/* jshint esversion: 6 */
/* jshint asi: true */
var http = require("http")

http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"})
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Web Server</title>	
			</head>
			<body>
				<h1>Web Page Served...</h1>
				<p>Hello World</p>
			</body>
		</html>
	`)

}).listen(3001)

console.log("Server running on http://localhost:3001")