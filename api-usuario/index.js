
var express = require('express');
var server = express();

server.use(express.json());

var users = ['Rick', 'Picle', 'Morty'];


server.get('/users', (req, res) => {
    return res.json(users);

});

//Api busca do usuario por index
server.get('/users/:index', (req, res) => {
    var usuario = users [req.params.index];
    return res.json(usuario);

});

//Api CRIANDO usuario 
server.post('/users', (req, res) => {
    var name = req.body.name;

    users.push(name);

    return res.json({ok: true, message: 'Cadastro realizado!'});

  
});

server.listen(3000);
console.log('Servidor rodando na porta 3000');