const app = require ('./app');
const mongoose = require ('mongoose');

require('dotenv').config({path:'variables.env'});

//Conexão banco de dados
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on ('error', (error)=>{
        console.error("ERRO: "+error.message);

});

app.set('port', process.env.port || 1234);
const server = app.listen (app.get ('port'), ()=>{
        console.log("Servidor rodando na porta: "+server.address().port);
        
});



