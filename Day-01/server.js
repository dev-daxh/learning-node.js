const hostname = '127.0.0.1';
const port = 3000;
const {createServer} = require('node:http')
const server  = createServer((req,resp)=>{
    resp.statusCode = 200;
    resp.setHeader = ('content-type','text/plain');
    resp.end("welcome to node.js world !");
});
server.listen(port,hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}/`);
});
