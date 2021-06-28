var http = require('http');
var url = require('url')

function startServer(route, handle) {
    function onRequest(request, response){
        var reviewData = '';
        var pathname = url.parse(request.url).pathname;
        console.log("Request received", pathname);
        request.setEncoding('utf-8');
        request.addListener('data', function(chunk){
            reviewData += chunk;
        });

        request.addListener('end',function(){
            route(handle, pathname, response, reviewData);
        });
}
http.createServer(onRequest).listen(8888);
console.log("Server started");
}
exports.startServer = startServer;