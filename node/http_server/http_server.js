const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("<h1>Create Server Successfully</h1>");
    res.end();
}).listen(3000,()=>{
    console.log("Database Connected Successfully");
})