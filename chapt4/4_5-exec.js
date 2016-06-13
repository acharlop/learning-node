var exec = require("child_process").exec

exec("ls", function(err, stdout){
	if(err){
		throw err
	}

	console.log("Listing finised")
	console.log(stdout)

})

exec("git version", function(err, stdout){
	if(err) {
		throw err
	}

	console.log("Git Version Exectured")
	console.log(stdout)
})