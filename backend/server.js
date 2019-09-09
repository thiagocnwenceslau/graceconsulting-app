const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3050;
const api = require('./routes/api');
const app = express();
app.use(bodyParser.json());
moment = require('moment');
app.use(cors());

app.use('/api', api);

app.get('/', function(req, res){
    res.send('Seja bem vindo ao servidor.');
})

app.listen(PORT, function () {
    console.log('Servidor express foi iniciado com sucesso na porta:' + PORT);
});