const http = require('http')
const server = http.createServer((req,res) => {
    console.log(req)
    res.end()
})

const port = 5000
server.listen((port),() => console.log(`Server is running:${port}`))