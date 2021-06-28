let querystring = require('querystring');

function home(response) {
    console.log("Executing home handler.");
    var htmlFile = "<!DOCTYPE html>"+
    "<html>"+
    "<head>"+
        "<title>Document</title>"+
    "</head>"+
    "<body>"+
        '<form action="/review" method="POST">'+
        "<textarea></textarea>"+
        '<input type="submit" value="submit">'+
    "</form>"+
    "</body>"+
    "</html>";
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(htmlFile);
    response.end();
}
function review(response, reviewData) {
    console.log("Executing home handler."); 
    response.writeHead(200, {"Content-type":"text/plain"})
    response.write("Your review is : ",querystring.parse(reviewData).text);
    response.end();
}
exports.home = home;
exports.review = review;