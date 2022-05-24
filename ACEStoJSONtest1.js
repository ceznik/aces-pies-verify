const xml2js = require('xml2js');
const fs = require('fs');

var parser = new xml2js.Parser();
var inspect = require('eyes').inspector({maxLength:false});

var ACESxml = 'C:\\Automate\\Suppliers\\Uploads\\SMP\\AutoZone - Pro Source_04-23-2022.xml'

fs.readFile(ACESxml, (err,data) => {
	parser.parseString(data, (err, result) => {
		//if (err) throw err;
	
		//console.dir(JSON.stringify(result));
		inspect(result);
		console.log('Done');
	});
});
