var http = require("http");
var fs = require("fs");

function onRequest(req, res) {
    var file = (req.url === "/") ? "/index.html" : req.url;
    if (file !== "/favicon.ico") {
        fs.readFile("." + file, function (err, data) {
            if (err) {
                console.log("Error occurs during reading file ." + file);
            }
            var content = file.substr(file.lastIndexOf(".") + 1);
            res.writeHead(200, {
                "Content-type": "text/" + content
            });
            result = data;
            res.write(result);
            res.end();
        });
    }
}

var server = http.createServer(onRequest).listen(8090);
console.log("Server is now running....");