import {start} from "./server";
let router = require("./router");
let requestHandler = require("./requestHandlers");


let handle ={}

handle["/"] =requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/show"] = requestHandler.show;
start(router.route, handle);


