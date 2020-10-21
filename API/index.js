//require entra na biblioteca e localiza todos os arquivos express
var express = require('express');
var server = express();

server.get('/test', (req, res) => {
    var data= {
        ok: true,
        message: 'Olá, você está usando o VERBO GET API test'
    }
    return res.json(data);

});

//Criando o servidor, rodando na porta http://localhost:3000/test
server.listen(3000);
console.log('criando o servidor rodando na porta 3000')