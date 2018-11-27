const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.get('/', (req, res) => {

    res.send('hello')

});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(` listening to port ${PORT} `);

