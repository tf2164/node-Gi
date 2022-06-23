var fs = require("fs");

var writeStream = fs.createWriteStream("planet-s.txt");
writeStream.write("mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto)  ");

writeStream.end();

function readData(err, data) {
	  console.log(data);
}

fs.readFile('planet-s.txt', 'utf8', readData);