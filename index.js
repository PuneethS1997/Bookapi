const express = require('express');

const app = express();

// HTTP Methods
// GET(READ) , POST(CREATE), PUT(UPDATE), DELETE(DELETE)

// HTTP codes
//10* = Informational
//20* = Succes
//30* = Redirectional
//40* = client side error
//50* = server side error


app.get('/', (req, res) => {
    res.send("Hello Express.js world");
})

app.delete('/profile', (req, res) => {
    res.send("Hello Express.js profile world");
})

app.post('/profile', (req, res) => {
    res.send("Hello Express.js profile world");
})

app.put('/profile', (req, res) => {
    res.send("Hello Express.js profile world");
})

app.listen(3000, () => {
    console.log("our first expres  app is running st locallhost:3000")
})