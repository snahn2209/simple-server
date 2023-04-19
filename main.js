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

const getViewUrl = (url) => {
    return 'views/'+url+'.html';
};

http
    .createServer((req, res) => {
        let viewUrl = getViewUrl(req.url);
        fs.readFile(viewUrl, (error, data) => {
            if(error) {
                res.writeHead(httpStatus.NOT_FOUND);
                res.write("<h1>FILE WAS NOT FOUND </h1>")
            } else {
                res.writeHead(httpStatus.OK, {
                    "Content-Type": "text/html"
                });
                res.write(data);
            }
            res.end();
        });

    })    
    .listen(port);
console.log('The server has started and is listening on port number: ' + port);

//sprint_01