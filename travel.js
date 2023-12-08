https//unpkg.com/ionicons@5.4.0/dist/ionicons.js
onclick=document.getElementById('id01').innerText="successful";
const http =require('http')
const fs =require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server =http.createServer((req, res)=>{
    res.statusCode200;
    res.setHeader('Content-Type','text/html');
    res.end('Hello World');
})

server.listen(port, hostname,() =>{
    console.log(`server running at http://${hostname}:${post}/`);
});
