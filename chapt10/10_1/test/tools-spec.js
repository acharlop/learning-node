var expect = require("chai").expect
var tools = require("../lib/tools")

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Avi", last: "Charlop"})
			expect(results).to.equal("Charlop, Avi")
		})
	})
	
	describe("loadWiki()", function() {

		this.timeout(5000)

		it("Load Abraham Lincoln's Wiki Page", function(done) {
			tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.be.ok
				done()
			})
		})
	})

})
