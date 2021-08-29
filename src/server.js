const express = require('express');
const server = express();

//Route request para files static como img/scripts/css
server.use(express.static('/public'))

/* Final catch-all rotas para index.html antes de definir */
server.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

server.listen(3000, () => console.log('🚀'))