//força o js a pegar os erros de digitação
'use strict'

// instanciando as dependencias
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

//criando função para server express, criando a porta padrão local para rodar a aplicação e setando
const app = express();
const port = 3000;
app.set('port', port);

//criando o servidor
const server = http.createServer(app);
//arquivos de rotas
const router = express.Router();

//criando rota inicial
const route = router.get('/', (req, res, next) => {
    //resposta com status ok
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
//iniciando rota
app.use('/', route);
//comando para saber se o servidor esta ouvindo a porta
server.listen(port);
console.log('API RODANDO NA PORTa ' + port);