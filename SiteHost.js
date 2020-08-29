console.log("Starting NJS Process.")
const http = require("http")
const fs = require("fs")
console.log("Loaded Libraries.")
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case "/404.css":
            res.end(fs.readFileSync("./404.css"))
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync("./404.html"))
            break;
    }
}).listen(process.env.PORT)
console.log(`Started... Port ${process.env.PORT}`)