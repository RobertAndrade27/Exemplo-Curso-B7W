const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Robert Conexo!')

});
router.get('/sobre', (req, res)=>{
    res.send('Página About');
)};

module.exports = router;