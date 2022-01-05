'use strict';

const express = require('express');
const router = express.Router();

//criando rota inicial
const route = router.get('/', (req, res, next) => {
    //resposta com status ok
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

module.exports = router;