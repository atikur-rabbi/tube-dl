const express = require('express')
const app = express()
const cors = require('cors')
const ytdl = require('ytdl-core')

app.get('/api', (req, res) => {
    res.send('Hello World!')
})


app.use(express.static(__dirname + '/public'));

module.exports = app