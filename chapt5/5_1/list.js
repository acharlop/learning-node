var fs = require("fs")

// var files = fs.readdirSync("./lib")
var files = fs.readdir("./lib", function(err, files){
	if(err){
		throw err
	}
	
	console.log(files)
})

console.log("Reading Files ...")
