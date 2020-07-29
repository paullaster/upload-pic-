import { createServer } from 'http'; 
let url = require("url");
function start(route, handle){
function onRequest(req,res){
       

        let pathname =url.parse(req.url).pathname;

        console.log(`Request for ${pathname} recieved`);
        
           route(handle, pathname, res, req);
       // res.end();
    }
    
    createServer(onRequest).listen(8080);
    console.log("Response ready");
}

export { start};



