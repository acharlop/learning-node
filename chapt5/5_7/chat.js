var fs = require("fs")
var people = require("./people.json")
var file = "chat.log"

// people.forEach(function(person) {
// 	fs.appendFile(file, `${person.name} has entered the room\n`)
// 	logChat(person)
// })



for(var i = 0; i < 45000; i++){
	var p = Math.floor(Math.random() * people.length)
	logChat(people[p])
}

function logChat(person) {
	var i = Math.floor(Math.random() * person.sayings.length)
	fs.appendFile(file, `${person.name}: ${person.sayings[i]}\n`)
}