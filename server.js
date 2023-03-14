const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



const port = 4322
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})