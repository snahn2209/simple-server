const { listenerCount } = require("process");

/*const routeResponseMap = {
    "/info": "<h1>Informationen</h1>",
    "/contact": "<h1>Kontakt</h1>",
    "/about": "<h1>Über uns</h1>",
    "/hello": "<h1>HI!</h1>",
    "/error": "<h1>Fehler</h1>",
}*/

const port = 3000, 
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");
const routeMap = {
    "/": "views/index.html"
};
http
    .createServer((request, response) => {
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        if (routeMap[request.url]){
            fs.readFile(routeMap[request.url], (error, data) => {
                response.write(data);
                response.end;
            });
        } else {
            response.end("<h1>sorry, not found.</h1>")
        }

        /*if (routeResponseMap[request.url]) {
            response.end(routeResponseMap[request.url]);
        } else {
            response.end("<h1>Willkommen!</h1>");
        }*/

    })    
    .listen(port);
console.log('The server has started and is listening on port number: ' + port);

//sprint_01