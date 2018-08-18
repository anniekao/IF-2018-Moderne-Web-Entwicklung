const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
})

app.get('/about', function (req, res) {
res.sendFile(__dirname + '/about.html');
})

app.listen(3000);
console.log("server started on port 3000");
