var Client = require('ftp');
var fs = require('fs');
var config = require('./config');

var c = new Client();



c.on('ready', function(){
	c.list(process.argv[2], function(err, list) {
		if (err) throw err;
		var count = 0;
		for(var i=0; i < list.length; i++){
			if (list[i].type == '-' && (list[i].name.search('ACES') != -1 || list[i].name.search('PIES') != -1)) {
				//console.dir(list[i].name + ": " + list[i].name.slice(9, 13) + ": " + list[i].name.slice(4,8));
				console.dir(list[i].name);
				count++;
			}
		}
		console.dir(count + " files detected.");
		c.end();
	});
});

// c.on('ready', function(){
// 	c.get('\\Incoming_DCI\\UNT20190209_PIES67.zip', (err, stream) => {
// 		if (err) throw err;
// 		stream.once('close', function(){c.end();});
// 		stream.pipe(fs.createWriteStream('UNT20190209_PIES67.zip'));
// 	});
// });



c.connect(config);



