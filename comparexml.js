fs = require('fs');
var parser = require('xml2json');
var xmldoc = require('xmldoc');
var xmlcompare = require('node-xml-compare');


function initialize(){
	xml-path-1 = "C:\Users\SSingh\Documents\aces-pies-verify\testfiles\BPI_Raybestos_Friction_PIES_2019-01-18_FULL.xml";

	xml-path-2 = "C:\Users\SSingh\Documents\aces-pies-verify\testfiles\BPI_Raybestos_Friction_PIES_2019-01-25_FULL.xml";

	return new Promise(function(resolve, reject) {
		fs.readFile(xml-path-1, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				var xml = new xmldoc.XmlDocument(data);
				console.log("Brand Code: " + xml.valueWithPath("Items.Item.BrandAAIAID"));
			}
		});
	});	
}

function main(){
	var initializePromise = initialize();
	initializePromise.then( (result) => {
		console.log("initialized...");
		console.log(result);
	});
}

main();



