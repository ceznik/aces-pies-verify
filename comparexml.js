fs = require('fs');
//var parser = require('xml2json');
var xmldoc = require('xmldoc');
var xmlcompare = require('node-xml-compare');

xml1 = "<sample><a>1</a><a>2</a><a>4</a><b>4</b></sample>";
xml2 = "<sample><a>2</a><a>1</a><a>3</a><c>3</c></sample>";

function initialize1(){
	xmlpath1 = "C:\\Users\\SSingh\\Documents\\aces-pies-verify\\testfiles\\BPI_Raybestos_Friction_PIES_2019-01-18_FULL.xml";
	return new Promise(function(resolve, reject) {
		fs.readFile(xmlpath1, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				var xml = new xmldoc.XmlDocument(data);
				//resolve("Brand Code: " + xml.valueWithPath("Items.Item.BrandAAIAID"));
				//resolve("Item Effective Date: " + xml.valueWithPath("Header.BlanketEffectiveDate"));
				//var effectdate1 = xml.valueWithPath("Header.BlanketEffectiveDate");
				resolve(data.toString());
			}
		});
	});	
}

function initialize2(){
	xmlpath2 = "C:\\Users\\SSingh\\Documents\\aces-pies-verify\\testfiles\\BPI_Raybestos_Friction_PIES_2019-01-25_FULL.xml";
	return new Promise(function(resolve, reject) {
		fs.readFile(xmlpath2, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				var xml = new xmldoc.XmlDocument(data);
				//resolve("Brand Code: " + xml.valueWithPath("Items.Item.BrandAAIAID"));
				//resolve("Item Effective Date: " + xml.valueWithPath("Header.BlanketEffectiveDate"));
				//var effectdate2 = xml.valueWithPath("Header.BlanketEffectiveDate");
				resolve(data.toString());
			}
		});
	});	
}

function main(){
	var initializePromise1 = initialize1();
	var initializePromise2 = initialize2();
	Promise.all([initializePromise1, initializePromise2]).then((val) => {
		xmlcompare(val[0], val[1], (result) => {
			console.log(result['-']);
		});
		console.log(val[0]);
	});
	// xmlcompare(xml1,xml2, (result) => {
	// 	console.log(result['-']);
	// });


}

// xmlcompare(xml1, xml2, (result) => {
// 	console.log(result['-']);
// 	console.log('---------');
// 	console.log(result['+']);
// });
main();



