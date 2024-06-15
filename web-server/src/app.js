//Core module 
const path = require('path')
// Importing express. 
const express = require ('express')

// Instanciate express 
const server = express ()

resPath = path.join (__dirname , '../resources/static') 

//Tell the server to serve static files from the static directory
server.use('/static', express.static(resPath))

//Set routes
server.get('/' , (req, res) => {
    res.sendFile(path.join(resPath , 'html/index.html'))
})

server.get('/help', (req, res) => {
    res.sendFile(path.join(resPath , 'html/help.html'))
})

server.get('/about', (req, res) => {
    res.sendFile(path.join(resPath , 'html/about.html'))
})

server.get('/weather', (req, res) => {
    res.sendFile(path.join(resPath , 'html/weather.html'))
})

//Start the server 
server.listen(3000, () => {
    console.log ("Server is running at port 3000")
})

console.log(resPath)