const fs = require('fs');
const path = require('path');
const xmlunzip = require('unzip');

// const compressedfilename = 'MAT20180907_PIES67.zip';
// const destfolder = 'FRFC-MaxTrac Suspension\\2018.09.10';

console.log('reading DCi directory');
try{
	fs.readdir('C:\\Users\\SSingh\\Downloads\\DCi 2018 09 14', (err, items) => {
		for (var i = 0; i < items.length; i++) {
			if(path.extname(items[i]) == '.zip'){
				fs.createReadStream('C:\\Users\\SSingh\\Downloads\\DCi 2018 09 14\\' + items[i]).pipe(xmlunzip.Extract({path: 'C:\\Users\\SSingh\\Downloads\\DCi 2018 09 14'}));
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
