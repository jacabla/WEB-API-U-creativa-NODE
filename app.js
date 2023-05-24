const http = require('http');
const contadorVisitas = require('./visitas');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  contadorVisitas.incrementarVisita();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World\nVisitas: ${contadorVisitas.obtenerVisitas()}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});