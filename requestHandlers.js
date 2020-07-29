let querystring = require('querystring');
import fs from 'fs';
import formidable from 'formidable';
function start(res){
console.log("Request handler 'start' was called");
let body =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
</head>
<body>
<form action="/upload" enctype="multipart/form-data" method="post">
  <input type="file" name="upload" multiple="multiple">
   <button type="submit" value="Upload file">submit</button>
    </form>
</body>
</html>`;
   res.writeHead(200, {"content-type": "text/html"});
   res.write(body);
   res.end();





}

function upload(res, req){
    console.log("Request handler 'upload' was called");
let form = new formidable.IncomingForm();
console.log("about to parse");
form.parse(req, (err,fields,file)=>{
    console.log("parsing done!");
    /*Possible errors on windows system:
    tried renaming an already existing file*/
    fs.rename(file.upload.path,"/tmp/test.png", (err)=>{
        if(err){
            fs.unlink("/tmp/test.png");
            fs.rename(file.upload.path, "/tmp/test.png");
        }
    });
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("received image:<br/>");
    res.write("<img src='/show' />");
    res.end();
});

}
    
function show(res) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("/tmp/test.png").pipe(res);
    // console.log("Request handler show was called");
    // fs.readFile("/tmp/test.png", "binary", (file, err)=>{
    //     if(file){
    //         res.writeHead(200, {"content-type": "image/png"})
    //         fs.createReadStream("/tmp/test.png").pipe(res);
    //         res.end();
            
    //     }
    //     else{
    //         res.writeHead(500, {"content-type": "text/plain"});
    //         res.write(err +"\n");
    //         res.end();
    //     }
    // });
}

export {start,upload,show};