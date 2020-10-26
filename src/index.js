// Importa o express para uma variável chamada express
const express = require('express');

// Faz com que a variável app utilize o express
// para iteragir com as requisições do usuário.
const app = express();

// Método get do express, que permite escutar as requisições
// vindas de uma determinada rota da nossa aplicação,
// e permite enviar uma resposta ao usuário.
app.get('/', (request, response) => {
  // Resposta sendo enviar atráves de um Objeto json
  return response.json({ message: 'Hello World!' });
});

// Porta que a aplicação irá escutar para
// saber o que o usuário necessita e o que
// responder a ele para cada requisição
app.listen(3333);