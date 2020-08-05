const http  =require('http');
const path = require('path');
const hostname  = "localhost";
const port = 3000;
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method == 'GET'){
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == ".html"){
            fs.exists(filePath, (exists) =>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader("Content-type", 'text/html');
                    res.end("<html><body><h1>ERROR :404 File Not Found</h1></body></html>");
                    return;
                } 
                res.statusCode = 200;
                res.setHeader("Content-type", 'text/html');
                fs.createReadStream(filePath).pipe(res);
                
            });
        } else{
            res.statusCode= 404;
            res.setHeader("Content-type", 'text/html');
            res.end("<html><body><h1>ERROR :Not an Html file</h1></body></html>");
        }
    } else{
        res.statusCode(404);
        res.setHeader("Content-type", 'text/html');
        res.end("<html><body><h1>ERROR :404 Method not supported</h1></body></html>");
    }
    
});

server.listen(port,hostname , () => {
    console.log(`Server running at http://${hostname}:${port}`);
});