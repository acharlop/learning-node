var fs = require("fs")
var people = require("./people.json")
var stream = fs.createWriteStream("chat.log")

people.forEach(function(person) {
	stream.write(`${person.name} has entered the room\n`)
	logChat(person)
})



for(var i = 0; i < 50000; i++){
	var p = Math.floor(Math.random() * people.length)
	logChat(people[p])
}

function logChat(person) {
	var i = Math.floor(Math.random() * person.sayings.length)
	stream.write(`${person.name}: ${person.sayings[i]}\n`)
}