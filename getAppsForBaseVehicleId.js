const fs = require('fs');
const xmldoc = require('xmldoc');
const XmlStream = require('xml-stream');

function returnBaseIDs(fileloc){
	return fs.readFile(fileloc, 'utf8', (err, data) => {
		console.log("Reading File...");
		if (err) throw err;
		var xml = new xmldoc.XmlDocument(data);
		var count = 0;

		xml.eachChild((apps) => {
			if(apps.valueWithPath("BaseVehicle@id") == process.argv[3]){
				count++;
				console.log(apps.toString() + '\r\n');
			}
			
		})
		console.log(count + " apps found.");
	})
}

function returnPartNumbers(fileloc){
	return fs.readFile(fileloc, 'utf8', (err, data) => {
		console.log("Reading File...");
		if (err) throw err;
		var xml = new xmldoc.XmlDocument(data);
		var count = 0;

		xml.eachChild((apps) => {
			if(apps.valueWithPath("Part") == process.argv[3]){
				count++;
				console.log(apps.toString() +'\n');
			}
		})
		console.log(count + " apps found.");
	})
}

function returnMfrLabel(fileloc){
	return fs.readFile(fileloc, 'utf8', (err, data) => {
		console.log("Reading File...");
		if (err) throw err;
		var xml = new xmldoc.XmlDocument(data);
		var count = 0;

		xml.eachChild((apps) => {
			if(apps.valueWithPath("MfrLabel") == process.argv[3]){
				count++;
				console.log(apps.toString());
			}
		})
		//console.log(count + " apps found.");
	})
}

function streamXML(fileloc){
	var teststream = fs.createReadStream(fileloc);
	var xml = new XmlStream(teststream);
	console.log(xml);
	//console.log('Streaming...');
	//xml.preserve('ACES', true);
	//xml.collect('App');
	//xml.collect('Item'); //PIES
	xml.collect('App'); //ACES
	// xml.on('endElement: ExtendedInformation', (item) => {
	// 	//console.log([item.PartNumber, item.SubBrandLabel, item.Descriptions.Description['$text'], item.ExtendedInformation]); // 
	// 	console.log(item.ExtendedProductInformation['$'].EXPICode);
	// });
	// xml.on('endElement: App', (app) => {
	// 	if(err) throw err;
	// 	console.log(app);
	// });
}

function getApps(fileloc){
	var mystream = fs.createReadStream(process.argv[2]);
	var myxml = new XmlStream(mystream);
	//var writeableStream = fs.createWriteStream('acdelco.xml');
	myxml.preserve('ACES', true);
	myxml.collect('App');
	myxml.on('updateElement: App', function(app){
		//console.log(app);
		if(app.Part['$text'] == process.argv[3]) {
			console.log(app.BaseVehicle);
		}

	});
}



//returnPartNumbers(process.argv[2]);
//returnBaseIDs(process.argv[2]);
//streamXML(process.argv[2]);
getApps(process.argv[2]);