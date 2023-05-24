let visitCount = 0;

function incrementarVisita() {
  visitCount++;
}

function obtenerVisitas() {
  return visitCount;
}

module.exports = {
  incrementarVisita,
  obtenerVisitas
};
