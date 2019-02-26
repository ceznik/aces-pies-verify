var Client = require('ftp');
var fs = require('fs');

var c = new Client();

var config = {
	host: "amazon.openwebs.com",
	port: 22,
	user: "mamuser",
	password: "techn0l0gies!!"
}

c.on('ready', function(){
	c.list('Incoming_SDC', function(err, list) {
		if (err) throw err;
		var count = 0;
		for(var i=0; i < list.length; i++){
			if (list[i].type == '-' && (list[i].name.search('_ACES') != -1 || list[i].name.search('_PIES') != -1)) {
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



