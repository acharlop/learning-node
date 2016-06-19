var https = require("https")

module.exports = {
	printName(person) {
		return `${person.last}, ${person.first}`;
	}
}