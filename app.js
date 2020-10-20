const express = require('express');

//Rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Robert Andrade!')

});

// Configurações 
const app = express ();
app.use('/', router);

module.exports = app;
