var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Olá Mundo!');
});
app.listen(3000, function () {
 console.log(
 'Exemplo de app escutando na porta 3000!');
});