const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//arquivos de rotas
const router = express.Router();

//carregar as rotas
const index = require('./routes/index');
const products = require('./routes/products')
    //converte tudo em json
app.use(bodyParser.json());
//opção para codificar a url
app.use(bodyParser.urlencoded({ extended: false }));

//iniciando rota
app.use('/', index);
app.use('/products', products);

module.express = app;