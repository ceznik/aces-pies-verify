const fs = require('fs');
const xmldoc = require('xmldoc');
const XmlStream = require('xml-stream');

function readXML(fileloc){
	return fs.readFile(fileloc, 'utf8', (err,data) => {
		console.log("Reading File....");
		if (err) throw err;
		var xml = new xmldoc.XmlDocument(data);
		console.log("Brand Code: " + xml.valueWithPath("Items.Item.BrandAAIAID"));
		console.log("Brand Name: " + xml.valueWithPath("Items.Item.BrandLabel"));
		console.log("File Effective Date: %s", xml.valueWithPath("Header.BlanketEffectiveDate"));
		console.log("PIES file contains %s elements", xml.valueWithPath("Trailer.ItemCount"));
		console.log(xml.valueWithPath("Header.PIESVersion"));
	});	
}

function deleteApp(fileloc){
	const stream = fs.createReadStream(fileloc);
	var xml = new XmlStream(stream);
	//stream.pipe(process.stdout);
	// stream.on("data", function(data) {
	// 		var chunk = data.toString();
	// 		//var xml = new xmldoc.XmlDocument(chunk);
	// 		console.log(chunk);

	// 	});
	// stream.on("data", function(data) {
	// 		var chunk = stream.read(100);
	// 		//var xml = new xmldoc.XmlDocument(chunk);
	// 		console.log(chunk);

	// 	});
	//xml.preserve('App');
	// xml.on('startElement: Header', function(header){
	// 	console.log(header);
	// 	xml.pause();
	// })
	xml.preserve('App', true);
	xml.collect('App');
	xml.on('endElement: App', function(app){
		//console.log(app['$']);
		//console.log(app.MfrLabel['$text']);
		if(app.MfrLabel['$text'] == 'UQuality') {
			console.log(app);
		}
	})
	//console.log(xml.length);
}

deleteApp(process.argv[2]);






