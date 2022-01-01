//força o js a pegar os erros de digitação
'use strict'

// instanciando as dependencias
const http = require('http');
const debug = require('debug')('nodestr:server');
//importando modulo de rotas dentro da aplicação
const app = require('../src/app');

//criando função para server express, criando a porta padrão local para rodar a aplicação e setando
const port = normalizePort(process.env.PORT || 3000);
//app.set('port', port);

//criando o servidor
const server = http.createServer(app);

//comando para saber se o servidor esta ouvindo a porta
server.listen(port);
//quando tiver um evento de erro ele chama a função de error
server.on('error', onError);
//quando tiver um evento listen ele chama a função OnListening
server.on('listening', onListening);
console.log('API RODANDO NA PORTa ' + port);

//normalizando a porta
function normalizePort(val) {
    //convertendo em numero
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

//funcao para pegar os error
function onError(error) {

    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch (error.code) {
        //se for erro de permissão
        case 'EACCES':
            console.log.error(bind + 'requeires elevated privileges');
            process.exit(1);
            break;
            // se for erro de endereço do user
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }

}

//função para pegar as informações e startar o debug
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe' + addr :
        'port' + addr.port;
    debug('Listening on' + bind);
}