const http = require('http');
const os = require('os');
console.log("Kubia server starting...");
var handler = function(request, response) {
 console.log("Received request from HOST:" + request.connection.remoteAddress);
 response.writeHead(200);
 response.end("New images. What's up? You've hit " + os.hostname() + "\n");
};
var www = http.createServer(handler);
www.listen(8081);
