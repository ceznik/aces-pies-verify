const fs = require('fs');
const xml2js = require('xml2js');
const xmldoc = require('xmldoc');
//var Promise = require('promise');


const xmlcompare = require('./node_modules/node-xml-compare');

const initialFileLocation = 'C:\\AUTOMATE\\Suppliers\\BKJC-AFE\\2018.08.13.p\\AFE20180813_PIES67.xml';
const compareToFileLocation = 'C:\\AUTOMATE\\Suppliers\\BKJC-AFE\\2018.08.15.p\\AFE20180815_PIES67.xml';
//var initialFileContents = new xmldoc.XmlDocument(fs.readFileSync(initialFileLocation).toString());
//var compareFileContents = new xmldoc.XmlDocument(fs.readFileSync(compareToFileLocation).toString());
var parser = new xml2js.Parser();


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

function getPartTypes(fileloc){
	return fs.readFile(fileloc, 'utf8', (err, data) => {
		console.log("Getting Part Types...");
		if (err) throw err;
		var xml = new xmldoc.XmlDocument(data);
		var app_array = xml.childrenNamed("App");
		xml.eachChild((apps) => {
			console.log("Found part type: %s", apps.childrenNamed("PartType"));
		});
		//console.log(app_array[0].PartType);
	});
}


readXML(process.argv[2]);

//getPartTypes(process.argv[2]);

// xmlcompare(initialFileContents, compareFileContents, function(result) {
// 	console.log(result);
// });




