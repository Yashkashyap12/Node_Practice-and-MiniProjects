const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Radha Rani");
})

server.listen(3000);