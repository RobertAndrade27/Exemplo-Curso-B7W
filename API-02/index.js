var express = require('express');
var server = express();


//Usando o Query params = ?nome=Robert

//Usando o Route params = ?nome=Robert


server.get('/users/:id', (req, res) => {
//return res.json({ok: true, message: 'Buscando o usuario no sistema usando o Query Params: ' + nome});

    var idUsuario = req.params.id;

    return res.json({ok: true, message: 'Buscando o usuario no sistema usando o Route Params: ' + idUsuario});
    
    
});

server.listen(3000);
console.log('Servidor rodando na porta 3000!');