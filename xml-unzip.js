const fs = require('fs');
const path = require('path');
const xmlunzip = require('unzip');

var folderPath = process.argv[2]

// const compressedfilename = 'MAT20180907_PIES67.zip';
// const destfolder = 'FRFC-MaxTrac Suspension\\2018.09.10';

console.log('reading DCi directory');
try{
	fs.readdir(folderPath, (err, items) => {
		for (var i = 0; i < items.length; i++) {
			if(path.extname(items[i]) == '.zip'){
				fs.createReadStream(folderPath + '\\' + items[i]).pipe(xmlunzip.Extract({path: folderPath}));
				console.log('extracted ' + items[i]);
			}
		}
	});
}
catch(error){
	console.log("Error while reading folder contents..." + error);
}


// console.log('creating readStream...');
// try{
// 	fs.createReadStream('C:\\Users\\SSingh\\Downloads\\' + compressedfilename).pipe(xmlunzip.Extract({path: 'C:\\Automate\\Suppliers\\_NAPA Direct'}));
// 	console.log('extraction complete...');
// }
// catch(error){
// 	console.log('error while unzipping....' + error);
// }
console.log('finished...');
