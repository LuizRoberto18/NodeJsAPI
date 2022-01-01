const express = require('express');

const app = express();
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

module.express = app;