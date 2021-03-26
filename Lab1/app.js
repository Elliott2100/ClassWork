const http=require('http');
var dt=require("./date")
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Hello elliott\n");
    res.write(dt.Name());
    res.end("\nKilling the object here "+dt.GiveDate());
}).listen(8080,()=>{
    console.log("The server is running on port 8080");
});