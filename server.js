var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var stringifyFile;

app.use(bodyParser.json());


app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        res.send(stringifyFile + req.params.note);
        });        
});

app.listen(3000);