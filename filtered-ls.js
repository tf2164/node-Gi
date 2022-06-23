var fs = require('fs');
var filePath = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(filePath, function(err, list) {
for(var i=0; i<list.length; i++){
    if (list[i].match(fileType)) {
        console.log(list[i]);
    }
}
});
