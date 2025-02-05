const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Adicionando delay
server.use((req, res, next) => {
  setTimeout(next, 1000); // Delay de 1 segundo
});

server.use(router);
server.listen(4000, () => {
  console.log('JSON Server está rodando na porta 4000 com delay de 1 segundo');
});
