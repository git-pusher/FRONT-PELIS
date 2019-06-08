const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname+'/build/index.html'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/build/index.html');
});

app.listen(port);
