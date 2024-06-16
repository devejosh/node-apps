//Core module 
const path = require('path')
// Importing express. 
const express = require ('express')
//Importing hbs
const hbs = require('hbs')

// Instanciate express 
const server = express ()

resPath = path.join (__dirname , '../resources/static') 
const viewsPath = path.join (__dirname , '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


server.set('view engine','hbs')
server.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Tell the server to serve static files from the static directory
server.use('/static', express.static(resPath))

//Set routes

server.get("/", (req, res) => {
    res.render('index', {
        'title' : "Home"
    })
})

server.get ('/about' , (req, res) => {
    res.render('about', {
        'title' : 'About'
    })
})

server.get('/help', (req, res) => {
    res.render('help', {
        'title' : 'Help'
    })
})

server.get ('/weather', (req, res) => {
    res.render('weather' , {
        'title' : 'Weather'
    })
})

//Start the server 
server.listen(3000, () => {
    console.log ("Server is running at port 3000")
})

