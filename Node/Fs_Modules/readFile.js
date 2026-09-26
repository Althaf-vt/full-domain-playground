const fs = require('fs');
const http = require('http');
const queryString = require('querystring');

http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('Source_Home.txt','utf-8',(err,data) => {
            if(err){
                res.writeHead(500,{'content-type':'text/plain'});
                return res.end('server error');
            }
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(data);
        })
    }else if(req.url === '/write' && req.method === 'POST'){
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString();
        })

        req.on('end', () => {
            const paresedData = queryString.parse(body);
            const text = paresedData.text;

            fs.writeFile('output.txt',text,err => {
                if(err){
                    res.writeHead(500);
                    return res.end(err);
                }

                res.end('saved ' + text)
            })
        })
    }else if(req.url === '/hello' && req.method === 'GET'){
        fs.readFile('index.html',(err,data) => {
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        })

    }else{
        res.end('404')
    }
}).listen(3000,() => console.log('running'))