function route(handle, pathname, res, req){
    console.log(`About to route a request for ${pathname} `);
if(typeof handle[pathname]==='function'){
    return handle[pathname](res,req);

}
else{
    console.log(`No request handler found for ${pathname}`);
    res.writeHead(404, {"content-type": "text/plain"});
    res.write(`404 Not Found!`);
    res.end();
}
}

export {route};