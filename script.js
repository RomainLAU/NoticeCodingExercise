const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
    let currentTime = new Date()
    // console.log(currentTime)
    res.send(currentTime)
})

app.listen(port, () => {
})