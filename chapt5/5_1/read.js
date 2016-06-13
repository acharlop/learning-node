var fs = require("fs")
var path = require ("path")

// async and as nodes buffer class
// var contents = fs.readFileSync("./lib/sayings.md", "UTF-8")
// var contents = fs.readFileSync("./lib/sayings.md")
// console.log(contents)

fs.readdir("./lib", function(err, files){
	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName)
		var stats = fs.statSync(file)

		if(stats.isFile() && fileName !== ".DS_Store") {
			fs.readFile(file, "UTF-8", function(err, contents){
				if(err){
					console.log(err)
				}
				console.log(contents)
			})
			
		}
	})
})

