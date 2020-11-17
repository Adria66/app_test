const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const Album = require('./models/album')

const PORT = process.env.PORT || 3000;
const url = 'mongodb+srv://api-music:music@cluster0.mwqh5.mongodb.net/api-music?retryWrites=true&w=majority'

mongoose.connect(url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
.then((result)=>{
    console.log('Conectado a la base de datos')
})
.catch((err)=>{
    console.log(err)
})

app.use(bodyParser.json())


app.get('/', (req, res, next)=>{
    res.send('hola')
})

app.get('/album', (req, res, next)=>{
    Album.find({})
    .then((album)=>{
        res.send(album)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/album', (req, res, next)=>{
 
    Album.create(req.body)
    .then((album)=>{
        res.redirect('/album')
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})
app.listen(PORT)