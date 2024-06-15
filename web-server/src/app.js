// Importing express. 
const express = require ('express')

// Instanciate express 
const server = express ()

server.get('/', (req, res) => {
    res.send("Welcome to express!")
})

server.get('/help', (req, res) => {
    res.send("Help page!")
})

server.get ('/about', (req, res) => {
    res.send("Welcome to the about page.")
})

server.get('/weather', (req, res) => {
    res.send ("Welcome to the weather page!")
})

//Start the server 
server.listen(3000, () => {
    console.log ("Server is running at port 3000")
})